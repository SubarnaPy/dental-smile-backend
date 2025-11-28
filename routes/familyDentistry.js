const express = require('express');
const { body } = require('express-validator');
const sanitizeHtml = require('sanitize-html');
const { auth, authorize } = require('../middleware/auth');
const {
  getFamilyDentistryPage,
  getFamilyDentistryPageAdmin,
  updateFamilyDentistryPage,
  publishFamilyDentistryPage,
  archiveFamilyDentistryPage
} = require('../controllers/familyDentistryController');

const router = express.Router();

// Validation rules
const familyDentistryValidation = [
  body('title').optional().trim().isLength({ min: 1, max: 200 }),
  body('slug').optional().trim().isLength({ min: 1, max: 100 }).matches(/^[a-z0-9-]+$/),
  body('status').optional().isIn(['draft', 'published', 'archived']),
  body('seo').optional().isObject(),
  body('hero').optional().isObject(),
  body('whyChooseFamily').optional().isObject(),
  body('careForAges').optional().isObject(),
  body('familyServices').optional().isObject(),
  body('familyTips').optional().isObject(),
  body('cta').optional().isObject()
];

// @desc    Get family dentistry page (public)
// @route   GET /api/family-dentistry
// @access  Public
router.get('/', getFamilyDentistryPage);

// @desc    Get family dentistry page (admin)
// @route   GET /api/family-dentistry/admin
// @access  Private
router.get('/admin', auth, getFamilyDentistryPageAdmin);

// @desc    Update family dentistry page
// @route   PUT /api/family-dentistry
// @access  Private
router.put('/', auth, familyDentistryValidation, updateFamilyDentistryPage);

// @desc    Publish family dentistry page
// @route   PATCH /api/family-dentistry/publish
// @access  Private
router.patch('/publish', auth, publishFamilyDentistryPage);

// @desc    Archive family dentistry page
// @route   PATCH /api/family-dentistry/archive
// @access  Private
router.patch('/archive', auth, archiveFamilyDentistryPage);

module.exports = router;