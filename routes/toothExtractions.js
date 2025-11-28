const express = require('express');
const router = express.Router();
const toothExtractionsController = require('../controllers/toothExtractionsController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', toothExtractionsController.getToothExtractionsPage);

// Protected routes (require authentication)
router.put('/', auth, toothExtractionsController.updateToothExtractionsPage);
router.post('/reset', auth, toothExtractionsController.resetToothExtractionsPage);

// Section-specific update routes
router.put('/hero', auth, toothExtractionsController.updateHeroSection);
router.put('/when-necessary', auth, toothExtractionsController.updateWhenNecessarySection);
router.put('/extraction-process', auth, toothExtractionsController.updateExtractionProcessSection);
router.put('/what-to-expect', auth, toothExtractionsController.updateWhatToExpectSection);
router.put('/recovery-tips', auth, toothExtractionsController.updateRecoveryTipsSection);
router.put('/replacement-options', auth, toothExtractionsController.updateReplacementOptionsSection);
router.put('/cta', auth, toothExtractionsController.updateCTASection);

module.exports = router;