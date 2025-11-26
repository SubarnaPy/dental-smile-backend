require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const connectDB = require('../config/database');
const ServiceTemplate = require('../models/ServiceTemplate');

async function importTemplates() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment');
      process.exit(1);
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    const candidateTables = [
      'service_templates',
      'service-templates',
      'templates',
      'page_templates',
      'page-templates'
    ];

    let totalFound = 0;
    let importedCount = 0;
    const imported = [];
    const skipped = [];

    for (const table of candidateTables) {
      try {
        const { data, error } = await supabase.from(table).select('*');
        if (error) {
          // likely table not found; skip
          continue;
        }

        if (!data || data.length === 0) continue;

        console.log(`Found ${data.length} entries in Supabase table '${table}'`);
        totalFound += data.length;

        for (const t of data) {
          try {
            const name = t.name || t.title || (t?.metadata && t.metadata.name) || null;
            if (!name) {
              console.log('Skipping template with no name');
              continue;
            }

            const exists = await ServiceTemplate.findOne({ name });
            if (exists) {
              skipped.push(name);
              continue;
            }

            const doc = {
              name,
              description: t.description || t.desc || null,
              category: t.category || null,
              content: t.content || t.body || null,
              previewImage: t.preview_image || t.previewImage || t.preview_image_url || null,
              thumbnailUrl: t.thumbnail_url || t.thumbnailUrl || null,
              themeTokens: t.theme_tokens || t.themeTokens || null,
              isPremium: t.is_premium || t.isPremium || false,
              usageCount: t.usage_count || t.usageCount || 0
            };

            const created = await ServiceTemplate.create(doc);
            imported.push(created.name || created._id);
            importedCount++;
          } catch (err) {
            console.error('Error importing item:', err.message);
          }
        }
      } catch (err) {
        // ignore and continue
        continue;
      }
    }

    console.log('Import summary:');
    console.log('Total candidates found in Supabase tables:', totalFound);
    console.log('Imported count:', importedCount);
    if (skipped.length) console.log('Skipped (already existed):', skipped.length);
    process.exit(0);
  } catch (err) {
    console.error('Import failed:', err);
    process.exit(1);
  }
}

importTemplates();
