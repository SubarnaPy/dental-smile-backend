const express = require('express');
const { auth, authorize } = require('../middleware/auth');
const Form = require('../models/Form');

const router = express.Router();

// @desc    Get all forms
// @route   GET /api/forms
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { status, search } = req.query;

    let filter = {};

    if (status) {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const forms = await Form.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Form.countDocuments(filter);

    res.json({
      success: true,
      data: {
        forms,
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

// @desc    Get single form
// @route   GET /api/forms/:id
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({
        success: false,
        message: 'Form not found'
      });
    }

    res.json({
      success: true,
      data: { form }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Update form status
// @route   PATCH /api/forms/:id/status
// @access  Private
router.patch('/:id/status', auth, authorize('admin', 'editor'), async (req, res) => {
  try {
    const { status, notes } = req.body;

    const form = await Form.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true, runValidators: true }
    );

    if (!form) {
      return res.status(404).json({
        success: false,
        message: 'Form not found'
      });
    }

    res.json({
      success: true,
      message: 'Form status updated successfully',
      data: { form }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Assign form to user
// @route   PATCH /api/forms/:id/assign
// @access  Private
router.patch('/:id/assign', auth, authorize('admin'), async (req, res) => {
  try {
    const { assignedTo } = req.body;

    const form = await Form.findByIdAndUpdate(
      req.params.id,
      { assignedTo },
      { new: true }
    ).populate('assignedTo', 'name email');

    if (!form) {
      return res.status(404).json({
        success: false,
        message: 'Form not found'
      });
    }

    res.json({
      success: true,
      message: 'Form assigned successfully',
      data: { form }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Delete form
// @route   DELETE /api/forms/:id
// @access  Private
router.delete('/:id', auth, authorize('admin'), async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({
        success: false,
        message: 'Form not found'
      });
    }

    await form.deleteOne();

    res.json({
      success: true,
      message: 'Form deleted successfully'
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