require('dotenv').config();
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const connectDB = require('../config/database');
const ServiceTemplate = require('../models/ServiceTemplate');

async function run() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    const frontendTemplatesPath = path.resolve(__dirname, '..', '..', 'admin-page-builder-04-main', 'src', 'lib', 'pageTemplates.ts');
    if (!fs.existsSync(frontendTemplatesPath)) {
      console.error('Templates file not found at', frontendTemplatesPath);
      process.exit(1);
    }

    const src = fs.readFileSync(frontendTemplatesPath, 'utf8');

    // Find the start of the array
    const marker = 'export const pageTemplates';
    const idx = src.indexOf(marker);
    console.log('marker index:', idx);
    if (idx === -1) {
      console.error('Could not find pageTemplates export in file');
      process.exit(1);
    }

    // find '=' after the export (to skip type annotation brackets like PageTemplate[])
    const eqPos = src.indexOf('=', idx);
    if (eqPos === -1) {
      console.error('Could not find assignment for pageTemplates');
      process.exit(1);
    }
    const arrStart = src.indexOf('[', eqPos);
    console.log('array start index:', arrStart);
    if (arrStart === -1) {
      console.error('Could not find start of templates array');
      process.exit(1);
    }

    // Extract the array by finding matching bracket
    let i = arrStart;
    let depth = 0;
    let endIndex = -1;
    while (i < src.length) {
      const ch = src[i];
      if (ch === '[') depth++;
      else if (ch === ']') {
        depth--;
        if (depth === 0) { endIndex = i; break; }
      }
      i++;
    }

    if (endIndex === -1) {
      console.error('Could not find end of templates array');
      process.exit(1);
    }
    console.log('array end index:', endIndex);

    const arrayText = src.substring(arrStart, endIndex + 1);
    console.log('extracted arrayText (first 400 chars):', arrayText.substring(0, 400));

    // Build a small JS module that exports the array
    const sandboxSrc = `module.exports = ${arrayText};`;
    const script = new vm.Script(sandboxSrc, { filename: 'pageTemplates.vm.js' });
    const sandbox = { module: {}, exports: {} };
    vm.createContext(sandbox);
    script.runInContext(sandbox);
    const templates = sandbox.module.exports;

    console.log('templates type:', typeof templates, 'isArray:', Array.isArray(templates));
    if (!Array.isArray(templates) || templates.length === 0) {
      console.log('No templates found in frontend file');
      process.exit(0);
    }

    console.log(`Found ${templates.length} templates in frontend code. Importing...`);

    let imported = 0;
    for (const t of templates) {
      try {
        const name = t.name || t.id || null;
        if (!name) continue;

        const exists = await ServiceTemplate.findOne({ name });
        if (exists) continue;

        const doc = {
          name: name,
          description: t.description || null,
          category: t.category || null,
          content: t.components || t.content || null,
          previewImage: (t.components && t.components[0] && t.components[0].data && (t.components[0].data.imageUrl || t.components[0].data.previewImage)) || null,
          thumbnailUrl: null,
          themeTokens: t.themeTokens || null,
          isPremium: false,
          usageCount: 0
        };

        await ServiceTemplate.create(doc);
        imported++;
      } catch (err) {
        console.error('Error importing template:', err.message);
      }
    }

    console.log(`Import complete. Imported ${imported} templates.`);
    process.exit(0);
  } catch (err) {
    console.error('Failed to import templates:', err);
    process.exit(1);
  }
}

run();
