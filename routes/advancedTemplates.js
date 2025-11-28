const express = require('express');
const { auth, authorize } = require('../middleware/auth');
const ServiceTemplate = require('../models/ServiceTemplate');

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

// @desc    Get all templates with full style data
// @route   GET /api/advanced-templates
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const { category, search } = req.query;
    let filter = { isActive: true };

    if (category) filter.category = category;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const templates = await ServiceTemplate.find(filter)
      .sort({ usageCount: -1, createdAt: -1 })
      .populate('createdBy', 'name');

    // Ensure all templates have styles
    const templatesWithStyles = templates.map(template => {
      const templateObj = template.toObject();
      if (templateObj.content) {
        templateObj.content = ensureComponentStyles(templateObj.content);
      }
      return templateObj;
    });

    res.json({
      success: true,
      data: { templates: templatesWithStyles }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get single template with full style data
// @route   GET /api/advanced-templates/:id
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const template = await ServiceTemplate.findById(req.params.id)
      .populate('createdBy', 'name');

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Template not found'
      });
    }

    const templateObj = template.toObject();
    if (templateObj.content) {
      templateObj.content = ensureComponentStyles(templateObj.content);
    }

    res.json({
      success: true,
      data: { template: templateObj }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Update template styles
// @route   PATCH /api/advanced-templates/:id/styles
// @access  Private (Admin/Editor)
router.patch('/:id/styles', auth, authorize('admin', 'editor'), async (req, res) => {
  try {
    const { content, pageStyle } = req.body;

    const template = await ServiceTemplate.findById(req.params.id);
    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Template not found'
      });
    }

    // Update content with new styles
    if (content) {
      template.content = ensureComponentStyles(content);
    }

    // Update page-level styles
    if (pageStyle) {
      template.pageStyle = pageStyle;
    }

    await template.save();

    res.json({
      success: true,
      message: 'Template styles updated successfully',
      data: { template }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Clone template with custom styles
// @route   POST /api/advanced-templates/:id/clone
// @access  Private (Admin/Editor)
router.post('/:id/clone', auth, authorize('admin', 'editor'), async (req, res) => {
  try {
    const sourceTemplate = await ServiceTemplate.findById(req.params.id);
    if (!sourceTemplate) {
      return res.status(404).json({
        success: false,
        message: 'Template not found'
      });
    }

    const { name, description, category } = req.body;

    const clonedTemplate = new ServiceTemplate({
      name: name || `${sourceTemplate.name} (Copy)`,
      description: description || sourceTemplate.description,
      category: category || sourceTemplate.category,
      content: ensureComponentStyles(sourceTemplate.content),
      pageStyle: sourceTemplate.pageStyle,
      thumbnailUrl: sourceTemplate.thumbnailUrl,
      previewImage: sourceTemplate.previewImage,
      tags: sourceTemplate.tags,
      isPremium: false,
      createdBy: req.user._id
    });

    await clonedTemplate.save();

    res.status(201).json({
      success: true,
      message: 'Template cloned successfully',
      data: { template: clonedTemplate }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get default styles for component type
// @route   GET /api/advanced-templates/default-styles/:type
// @access  Private
router.get('/default-styles/:type', auth, (req, res) => {
  const { type } = req.params;
  const styles = defaultStyles[type];

  if (!styles) {
    return res.status(404).json({
      success: false,
      message: 'No default styles found for this component type'
    });
  }

  res.json({
    success: true,
    data: { type, styles }
  });
});

// @desc    Get all default styles
// @route   GET /api/advanced-templates/default-styles
// @access  Private
router.get('/default-styles', auth, (req, res) => {
  res.json({
    success: true,
    data: { defaultStyles }
  });
});

module.exports = router;
