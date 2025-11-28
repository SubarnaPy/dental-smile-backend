const express = require('express');
const { body } = require('express-validator');
const sanitizeHtml = require('sanitize-html');
const { auth, authorize } = require('../middleware/auth');
const { apiLimiter } = require('../middleware/rateLimit');
const {
  getEmergencyDentistryPage,
  getEmergencyDentistryPageAdmin,
  updateEmergencyDentistryPage,
  publishEmergencyDentistryPage,
  archiveEmergencyDentistryPage
} = require('../controllers/emergencyDentistryController');

const router = express.Router();

// Validation rules
const emergencyDentistryValidation = [
  body('title').optional().trim().isLength({ min: 1, max: 200 }),
  body('slug').optional().trim().isLength({ min: 1, max: 100 }).matches(/^[a-z0-9-]+$/),
  body('status').optional().isIn(['draft', 'published', 'archived']),
  body('seo').optional().isObject(),
  body('hero').optional().isObject(),
  body('whyMatters').optional().isObject(),
  body('commonEmergencies').optional().isObject(),
  body('whatToExpect').optional().isObject(),
  body('firstAidTips').optional().isObject(),
  body('cta').optional().isObject()
];

// Rate limiter for public routes
const publicLimiter = apiLimiter; // 100 requests per 15 minutes

// @desc    Get emergency dentistry page (public)
// @route   GET /api/emergency-dentistry
// @access  Public
router.get('/', publicLimiter, getEmergencyDentistryPage);

// @desc    Get emergency dentistry page (admin)
// @route   GET /api/emergency-dentistry/admin
// @access  Private
router.get('/admin', auth, getEmergencyDentistryPageAdmin);

// @desc    Update emergency dentistry page
// @route   PUT /api/emergency-dentistry
// @access  Private
router.put('/', auth, emergencyDentistryValidation, updateEmergencyDentistryPage);

// @desc    Publish emergency dentistry page
// @route   PATCH /api/emergency-dentistry/publish
// @access  Private
router.patch('/publish', auth, publishEmergencyDentistryPage);

// @desc    Archive emergency dentistry page
// @route   PATCH /api/emergency-dentistry/archive
// @access  Private
router.patch('/archive', auth, archiveEmergencyDentistryPage);

module.exports = router;