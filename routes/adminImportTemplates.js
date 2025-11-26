const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const { auth, authorize } = require('../middleware/auth');
const ServiceTemplate = require('../models/ServiceTemplate');

const router = express.Router();

// Protected admin route to import service templates from Supabase
router.post('/', auth, authorize('admin'), async (req, res) => {
  try {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return res.status(400).json({ success: false, message: 'Supabase credentials not configured' });
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
    const imported = [];
    const skipped = [];

    for (const table of candidateTables) {
      try {
        const { data, error } = await supabase.from(table).select('*');
        if (error) {
          // table might not exist; move on
          continue;
        }

        if (!data || data.length === 0) continue;

        totalFound += data.length;

        for (const t of data) {
          try {
            const exists = await ServiceTemplate.findOne({ name: t.name });
            if (exists) {
              skipped.push(t.name || '(no name)');
              continue;
            }

            const doc = {
              name: t.name,
              description: t.description,
              category: t.category,
              content: t.content,
              previewImage: t.preview_image || t.previewImage || t.preview_image_url || null,
              thumbnailUrl: t.thumbnail_url || t.thumbnailUrl || null,
              themeTokens: t.theme_tokens || t.themeTokens || null,
              isPremium: t.is_premium || t.isPremium || false,
              usageCount: t.usage_count || t.usageCount || 0
            };

            const created = await ServiceTemplate.create(doc);
            imported.push(created.name || created._id);
          } catch (err) {
            // per-item error, keep going
            console.error('Error importing template item:', err.message);
          }
        }
      } catch (err) {
        // ignore table not found
        continue;
      }
    }

    return res.json({
      success: true,
      message: 'Import completed',
      data: { totalFound, importedCount: imported.length, imported, skipped }
    });
  } catch (err) {
    console.error('Import failed:', err);
    return res.status(500).json({ success: false, message: 'Import failed', error: err.message });
  }
});

module.exports = router;
