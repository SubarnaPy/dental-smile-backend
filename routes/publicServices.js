const express = require('express');
const ServicePage = require('../models/ServicePage');

const router = express.Router();

// Public list of published service pages
// GET /api/services
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const { search, category } = req.query;

    const filter = { status: 'published' };

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (category) filter.category = category;

    const servicePages = await ServicePage.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('title slug description image previewImage category createdAt')
      .lean();

    const total = await ServicePage.countDocuments(filter);

    res.json({
      success: true,
      data: { servicePages, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// Public single service page by slug
// GET /api/services/:slug
router.get('/:slug', async (req, res) => {
  try {
    const servicePage = await ServicePage.findOne({ slug: req.params.slug, status: 'published' }).lean();

    if (!servicePage) {
      return res.status(404).json({ success: false, message: 'Service page not found' });
    }

    res.json({ success: true, data: { servicePage } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

module.exports = router;
