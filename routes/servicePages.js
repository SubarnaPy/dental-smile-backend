const express = require('express');
const { body } = require('express-validator');
const sanitizeHtml = require('sanitize-html');
const { auth, authorize } = require('../middleware/auth');
const { createLimiter } = require('../middleware/rateLimit');
const ServicePage = require('../models/ServicePage');

const router = express.Router();

// Validation rules
const servicePageValidation = [
  body('title').trim().isLength({ min: 1, max: 200 }),
  body('slug').trim().isLength({ min: 1, max: 100 }).matches(/^[a-z0-9-]+$/),
  body('description').optional().trim().isLength({ max: 500 }),
  body('category').optional().trim(),
  body('image').optional().isURL(),
  body('previewImage').optional().isURL(),
  body('status').optional().isIn(['draft', 'published', 'archived']),
  body('content').optional(),
  body('pageStyle').optional(),
  body('seo').optional().isObject(),
  body('themeTokens').optional().isObject()
];

// @desc    Get published service pages (public)
// @route   GET /api/service-pages/public
// @access  Public
router.get('/public', async (req, res) => {
  try {
    const servicePages = await ServicePage.find({ status: 'published' })
      .sort({ createdAt: -1 })
      .populate('category')
      .select('-createdBy -updatedBy');

    res.json({
      success: true,
      data: servicePages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get all service pages
// @route   GET /api/service-pages
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { search, category, status } = req.query;

    let filter = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (status) {
      filter.status = status;
    }

    const servicePages = await ServicePage.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('category')
      .populate('createdBy', 'name')
      .populate('updatedBy', 'name');

    const total = await ServicePage.countDocuments(filter);

    res.json({
      success: true,
      data: {
        servicePages,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get single service page
// @route   GET /api/service-pages/:id
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const servicePage = await ServicePage.findById(req.params.id)
      .populate('createdBy', 'name')
      .populate('updatedBy', 'name');

    if (!servicePage) {
      return res.status(404).json({
        success: false,
        message: 'Service page not found'
      });
    }

    res.json({
      success: true,
      data: { servicePage }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get service page by slug
// @route   GET /api/service-pages/slug/:slug
// @access  Private
router.get('/slug/:slug', auth, async (req, res) => {
  try {
    const servicePage = await ServicePage.findOne({ slug: req.params.slug })
      .populate('createdBy', 'name')
      .populate('updatedBy', 'name');

    if (!servicePage) {
      return res.status(404).json({
        success: false,
        message: 'Service page not found'
      });
    }

    res.json({
      success: true,
      data: { servicePage }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

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

// @desc    Create service page
// @route   POST /api/service-pages
// @access  Private
router.post('/', auth, authorize('admin', 'editor'), createLimiter, servicePageValidation, async (req, res) => {
  try {
    // sanitize incoming HTML fields to avoid storing unsafe markup
    const sanitize = (input) => {
      if (typeof input === 'string') {
        return sanitizeHtml(input, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1','h2','img','figure','figcaption','blockquote','pre','code','table','thead','tbody','tr','th','td','u','s']),
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src','alt','width','height'],
            a: ['href','name','target','rel']
          },
        });
      }
      if (Array.isArray(input)) return input.map(sanitize);
      if (input && typeof input === 'object') {
        const out = {};
        for (const k of Object.keys(input)) out[k] = sanitize(input[k]);
        return out;
      }
      return input;
    };

    const sanitizedBody = sanitize(req.body);
    
    // Ensure components have styles
    if (sanitizedBody.content) {
      sanitizedBody.content = ensureComponentStyles(sanitizedBody.content);
    }

    const servicePageData = {
      ...sanitizedBody,
      createdBy: req.user._id,
      updatedBy: req.user._id
    };

    const servicePage = await ServicePage.create(servicePageData);

    res.status(201).json({
      success: true,
      message: 'Service page created successfully',
      data: { servicePage }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Slug already exists'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Update service page
// @route   PUT /api/service-pages/:id
// @access  Private
router.put('/:id', auth, authorize('admin', 'editor'), servicePageValidation, async (req, res) => {
  try {
    // sanitize body before update
    const sanitize = (input) => {
      if (typeof input === 'string') {
        return sanitizeHtml(input, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1','h2','img','figure','figcaption','blockquote','pre','code','table','thead','tbody','tr','th','td','u','s']),
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src','alt','width','height'],
            a: ['href','name','target','rel']
          },
        });
      }
      if (Array.isArray(input)) return input.map(sanitize);
      if (input && typeof input === 'object') {
        const out = {};
        for (const k of Object.keys(input)) out[k] = sanitize(input[k]);
        return out;
      }
      return input;
    };

    const sanitizedBody = sanitize(req.body);
    
    // Ensure components have styles
    if (sanitizedBody.content) {
      sanitizedBody.content = ensureComponentStyles(sanitizedBody.content);
    }

    const servicePage = await ServicePage.findByIdAndUpdate(
      req.params.id,
      {
        ...sanitizedBody,
        updatedBy: req.user._id
      },
      { new: true, runValidators: true }
    ).populate('createdBy', 'name').populate('updatedBy', 'name');

    if (!servicePage) {
      return res.status(404).json({
        success: false,
        message: 'Service page not found'
      });
    }

    res.json({
      success: true,
      message: 'Service page updated successfully',
      data: { servicePage }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Slug already exists'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Publish/Unpublish service page
// @route   PATCH /api/service-pages/:id/publish
// @access  Private
router.patch('/:id/publish', auth, authorize('admin', 'editor'), async (req, res) => {
  try {
    const servicePage = await ServicePage.findById(req.params.id);

    if (!servicePage) {
      return res.status(404).json({
        success: false,
        message: 'Service page not found'
      });
    }

    servicePage.status = servicePage.status === 'published' ? 'draft' : 'published';
    servicePage.updatedBy = req.user._id;
    await servicePage.save();

    await servicePage.populate('createdBy', 'name');
    await servicePage.populate('updatedBy', 'name');

    res.json({
      success: true,
      message: `Service page ${servicePage.status === 'published' ? 'published' : 'unpublished'} successfully`,
      data: { servicePage }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Delete service page
// @route   DELETE /api/service-pages/:id
// @access  Private
router.delete('/:id', auth, authorize('admin'), async (req, res) => {
  try {
    const servicePage = await ServicePage.findById(req.params.id);

    if (!servicePage) {
      return res.status(404).json({
        success: false,
        message: 'Service page not found'
      });
    }

    await servicePage.deleteOne();

    res.json({
      success: true,
      message: 'Service page deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get service page categories
// @route   GET /api/service-pages/categories
// @access  Private
router.get('/categories', auth, async (req, res) => {
  try {
    const categories = await ServicePage.distinct('category');
    res.json({
      success: true,
      data: { categories: categories.filter(cat => cat) }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;