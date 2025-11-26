require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const ServiceTemplate = require('../models/ServiceTemplate');
const ServicePage = require('../models/ServicePage');

async function normalize() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    const ObjectId = mongoose.Types.ObjectId;

    // helper to decide if id looks like a Mongo id
    const isMongoId = (id) => typeof id === 'string' && /^[a-fA-F0-9]{24}$/.test(id);

    const backup = { templates: [], pages: [] };

    // Process service templates
    const templates = await ServiceTemplate.find({});
    console.log(`Found ${templates.length} ServiceTemplate documents`);
    let tmplUpdated = 0;
    for (const t of templates) {
      const content = t.content || t.components || [];
      let changed = false;
      if (Array.isArray(content)) {
        for (const comp of content) {
          if (comp && comp.id && comp.id.toString().startsWith('comp-')) {
            comp.id = new ObjectId().toString();
            changed = true;
          } else if (comp && (!comp.id || !isMongoId(comp.id))) {
            // assign if missing or non-mongo format
            comp.id = new ObjectId().toString();
            changed = true;
          }
        }
      }
      if (changed) {
        backup.templates.push({ _id: t._id, before: t.toObject() });
        await ServiceTemplate.findByIdAndUpdate(t._id, { content }, { new: true });
        tmplUpdated++;
      }
    }

    // Process service pages
    const pages = await ServicePage.find({});
    console.log(`Found ${pages.length} ServicePage documents`);
    let pagesUpdated = 0;
    for (const p of pages) {
      const content = p.content || [];
      let changed = false;
      if (Array.isArray(content)) {
        for (const comp of content) {
          if (comp && comp.id && comp.id.toString().startsWith('comp-')) {
            comp.id = new ObjectId().toString();
            changed = true;
          } else if (comp && (!comp.id || !isMongoId(comp.id))) {
            comp.id = new ObjectId().toString();
            changed = true;
          }
        }
      }
      if (changed) {
        backup.pages.push({ _id: p._id, before: p.toObject() });
        await ServicePage.findByIdAndUpdate(p._id, { content }, { new: true });
        pagesUpdated++;
      }
    }

    // write backup
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.resolve(__dirname, `normalize-component-ids-backup-${timestamp}.json`);
    fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2));
    console.log(`Backup written to ${backupPath}`);

    console.log(`Templates updated: ${tmplUpdated}, Pages updated: ${pagesUpdated}`);
    process.exit(0);
  } catch (err) {
    console.error('Normalization failed:', err);
    process.exit(1);
  }
}

normalize();
