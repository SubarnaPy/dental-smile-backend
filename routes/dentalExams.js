const express = require('express');
const { body } = require('express-validator');
const sanitizeHtml = require('sanitize-html');
const { auth, authorize } = require('../middleware/auth');
const {
  getDentalExamsPage,
  getDentalExamsPageAdmin,
  updateDentalExamsPage,
  publishDentalExamsPage,
  archiveDentalExamsPage
} = require('../controllers/dentalExamsController');

const router = express.Router();

// Validation rules
const dentalExamsValidation = [
  body('title').optional().trim().isLength({ min: 1, max: 200 }),
  body('slug').optional().trim().isLength({ min: 1, max: 100 }).matches(/^[a-z0-9-]+$/),
  body('status').optional().isIn(['draft', 'published', 'archived']),
  body('seo').optional().isObject(),
  body('hero').optional().isObject(),
  body('whyExamsMatter').optional().isObject(),
  body('examProcess').optional().isObject(),
  body('examFrequency').optional().isObject(),
  body('whatToExpect').optional().isObject(),
  body('cta').optional().isObject()
];

// @desc    Get dental exams page (public)
// @route   GET /api/dental-exams
// @access  Public
router.get('/', getDentalExamsPage);

// @desc    Get dental exams page (admin)
// @route   GET /api/dental-exams/admin
// @access  Private
router.get('/admin', auth, getDentalExamsPageAdmin);

// @desc    Update dental exams page
// @route   PUT /api/dental-exams
// @access  Private
router.put('/', auth, dentalExamsValidation, updateDentalExamsPage);

// @desc    Publish dental exams page
// @route   PATCH /api/dental-exams/publish
// @access  Private
router.patch('/publish', auth, publishDentalExamsPage);

// @desc    Archive dental exams page
// @route   PATCH /api/dental-exams/archive
// @access  Private
router.patch('/archive', auth, archiveDentalExamsPage);

module.exports = router;