const express = require('express');
const { body } = require('express-validator');
const { auth, authorize } = require('../middleware/auth');
const ServiceTemplate = require('../models/ServiceTemplate');

const router = express.Router();

// Validation rules
const serviceTemplateValidation = [
  body('name').trim().isLength({ min: 1, max: 200 }),
  body('description').optional().trim().isLength({ max: 500 }),
  body('category').optional().trim(),
  body('content').optional(),
  body('pageStyle').optional(),
  body('previewImage').optional().isURL(),
  body('thumbnailUrl').optional().isURL(),
  body('themeTokens').optional().isObject(),
  body('isPremium').optional().isBoolean(),
  body('tags').optional().isArray()
];

// @desc    Get all service templates
// @route   GET /api/service-templates
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { search, category, isPremium } = req.query;

    let filter = { isActive: true };

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (isPremium !== undefined) {
      filter.isPremium = isPremium === 'true';
    }

    const templates = await ServiceTemplate.find(filter)
      .sort({ usageCount: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('createdBy', 'name');

    const total = await ServiceTemplate.countDocuments(filter);

    res.json({
      success: true,
      data: {
        templates,
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

// @desc    Get single service template
// @route   GET /api/service-templates/:id
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const template = await ServiceTemplate.findById(req.params.id)
      .populate('createdBy', 'name');

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Service template not found'
      });
    }

    res.json({
      success: true,
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

// @desc    Create service template
// @route   POST /api/service-templates
// @access  Private
router.post('/', auth, authorize('admin', 'editor'), serviceTemplateValidation, async (req, res) => {
  try {
    const templateData = {
      ...req.body,
      createdBy: req.user._id
    };

    const template = await ServiceTemplate.create(templateData);

    res.status(201).json({
      success: true,
      message: 'Service template created successfully',
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

// @desc    Update service template
// @route   PUT /api/service-templates/:id
// @access  Private
router.put('/:id', auth, authorize('admin', 'editor'), serviceTemplateValidation, async (req, res) => {
  try {
    const template = await ServiceTemplate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('createdBy', 'name');

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Service template not found'
      });
    }

    res.json({
      success: true,
      message: 'Service template updated successfully',
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

// @desc    Increment usage count
// @route   PATCH /api/service-templates/:id/use
// @access  Private
router.patch('/:id/use', auth, async (req, res) => {
  try {
    const template = await ServiceTemplate.findByIdAndUpdate(
      req.params.id,
      { $inc: { usageCount: 1 } },
      { new: true }
    );

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Service template not found'
      });
    }

    res.json({
      success: true,
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

// @desc    Delete service template
// @route   DELETE /api/service-templates/:id
// @access  Private
router.delete('/:id', auth, authorize('admin'), async (req, res) => {
  try {
    const template = await ServiceTemplate.findById(req.params.id);

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Service template not found'
      });
    }

    await template.deleteOne();

    res.json({
      success: true,
      message: 'Service template deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get service template categories
// @route   GET /api/service-templates/categories
// @access  Private
router.get('/categories', auth, async (req, res) => {
  try {
    const categories = await ServiceTemplate.distinct('category');
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