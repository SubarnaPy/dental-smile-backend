const express = require('express');
const router = express.Router();
const dentalFillingsController = require('../controllers/dentalFillingsController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', dentalFillingsController.getDentalFillingsPage);

// Protected routes (require authentication)
router.put('/', auth, dentalFillingsController.updateDentalFillingsPage);
router.post('/reset', auth, dentalFillingsController.resetDentalFillingsPage);

// Section-specific update routes
router.put('/hero', auth, dentalFillingsController.updateHeroSection);
router.put('/why-important', auth, dentalFillingsController.updateWhyImportantSection);
router.put('/filling-options', auth, dentalFillingsController.updateFillingOptionsSection);
router.put('/filling-process', auth, dentalFillingsController.updateFillingProcessSection);
router.put('/cost-comparison', auth, dentalFillingsController.updateCostComparisonSection);
router.put('/care-after', auth, dentalFillingsController.updateCareAfterSection);
router.put('/prevention', auth, dentalFillingsController.updatePreventionSection);
router.put('/cta', auth, dentalFillingsController.updateCTASection);

module.exports = router;