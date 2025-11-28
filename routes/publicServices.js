const express = require('express');
const ServicePage = require('../models/ServicePage');

const router = express.Router();

// Default styles for components
const defaultStyles = {
  hero: { padding: '5rem 1rem', textAlign: 'center', minHeight: '520px', backgroundSize: 'cover', backgroundPosition: 'center', overlay: { color: 'rgba(0,0,0,0.35)', opacity: 0.35 }, responsive: { sm: { padding: '3rem 1rem', minHeight: '360px' }, md: { padding: '5rem 1rem', minHeight: '480px' }, lg: { padding: '6rem 2rem', minHeight: '520px' } } },
  imageText: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } }, objectFit: 'cover' },
  iconGrid: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } } },
  text: { padding: '2rem 1rem', maxWidth: '64rem', margin: '0 auto', responsive: { sm: { padding: '1rem' }, md: { padding: '2rem 1rem' } } },
  image: { padding: '2rem 1rem', objectFit: 'cover' },
  cta: { padding: '4rem 1rem', textAlign: 'center', responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } } },
  ctaWithBackground: { padding: '5rem 1rem', textAlign: 'center', minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center', responsive: { sm: { padding: '3rem 1rem' }, md: { padding: '4rem 1rem' } } },
  stats: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  testimonials: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  faq: { padding: '4rem 1rem', maxWidth: '64rem', margin: '0 auto', responsive: { sm: { padding: '2rem 1rem' } } },
  pricing: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  timeline: { padding: '4rem 1rem', maxWidth: '64rem', margin: '0 auto', responsive: { sm: { padding: '2rem 1rem' } } },
  numberedList: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  featureDetail: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
};

// Ensure all components have styles
const ensureComponentStyles = (content) => {
  if (!Array.isArray(content)) return content;
  return content.map(component => ({
    ...component,
    style: component.style && Object.keys(component.style).length > 0 
      ? component.style 
      : (defaultStyles[component.type] || {})
  }));
};

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

    // Ensure all components have styles before sending to frontend
    if (servicePage.content) {
      servicePage.content = ensureComponentStyles(servicePage.content);
    }

    res.json({ success: true, data: { servicePage } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

module.exports = router;
