require('dotenv').config();
const connectDB = require('../config/database');
const ServiceTemplate = require('../models/ServiceTemplate');
const ServicePage = require('../models/ServicePage');
const fs = require('fs');
const path = require('path');
const { Types } = require('mongoose');

// Lightweight default style map (kept in sync with frontend defaults)
const defaultStyles = {
  hero: { padding: '5rem 1rem', textAlign: 'center', minHeight: '520px', overlay: { color: 'rgba(0,0,0,0.35)', opacity: 0.35 } },
  imageText: { padding: '4rem 1rem', objectFit: 'cover' },
  iconGrid: { padding: '4rem 1rem' },
  text: { padding: '2rem 1rem', maxWidth: '64rem', margin: '0 auto' },
  cta: { padding: '4rem 1rem', textAlign: 'center' }
};

async function run() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    const templates = await ServiceTemplate.find({});
    console.log(`Found ${templates.length} templates`);
    let updated = 0;

    for (const t of templates) {
      let changed = false;
      t.content = t.content || t.components || [];
      if (!t.previewImage) {
        t.previewImage = '/placeholder.svg';
        changed = true;
      }

      if (Array.isArray(t.content)) {
        for (const comp of t.content) {
          if (!comp.style) {
            const def = defaultStyles[comp.type] || {};
            comp.style = { ...def };
            changed = true;
          } else {
            // ensure objectFit present for image-like components
            if ((comp.type === 'image' || comp.type === 'imageText' || comp.type === 'ctaWithBackground') && !comp.style.objectFit) {
              comp.style.objectFit = 'cover';
              changed = true;
            }
          }
          // ensure each component has a stable id (if missing)
          if (!comp.id || (typeof comp.id === 'string' && comp.id.startsWith('comp-'))) {
            comp.id = new Types.ObjectId().toString();
            changed = true;
          }
        }
      }

      if (changed) {
        await ServiceTemplate.findByIdAndUpdate(t._id, { content: t.content, previewImage: t.previewImage });
        updated++;
      }
    }

    // Also patch service pages to ensure previewImage and component styles
    const pages = await ServicePage.find({});
    console.log(`Found ${pages.length} pages`);
    let pagesUpdated = 0;
    for (const p of pages) {
      let changed = false;
      p.content = p.content || [];
      for (const comp of p.content) {
        if (!comp.style) {
          const def = defaultStyles[comp.type] || {};
          comp.style = { ...def };
          changed = true;
        }
        if ((comp.type === 'image' || comp.type === 'imageText' || comp.type === 'ctaWithBackground') && !comp.style.objectFit) {
          comp.style.objectFit = 'cover';
          changed = true;
        }
        if (!comp.id || (typeof comp.id === 'string' && comp.id.startsWith('comp-'))) {
          comp.id = new Types.ObjectId().toString();
          changed = true;
        }
      }
      if (!p.previewImage) { p.previewImage = '/placeholder.svg'; changed = true; }
      if (changed) { await ServicePage.findByIdAndUpdate(p._id, { content: p.content, previewImage: p.previewImage }); pagesUpdated++; }
    }

    console.log(`Templates updated: ${updated}, Pages updated: ${pagesUpdated}`);
    process.exit(0);
  } catch (err) {
    console.error('Failed to enhance templates:', err);
    process.exit(1);
  }
}

run();
