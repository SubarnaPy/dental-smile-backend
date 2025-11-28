const express = require('express');
const router = express.Router();
const kidsDentistryController = require('../controllers/kidsDentistryController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', kidsDentistryController.getKidsDentistryPage);

// Protected routes (require authentication)
router.put('/', auth, kidsDentistryController.updateKidsDentistryPage);
router.post('/reset', auth, kidsDentistryController.resetKidsDentistryPage);

// Section-specific update routes
router.put('/hero', auth, kidsDentistryController.updateHeroSection);
router.put('/why-matters', auth, kidsDentistryController.updateWhyMattersSection);
router.put('/kid-friendly-approach', auth, kidsDentistryController.updateKidFriendlyApproachSection);
router.put('/services', auth, kidsDentistryController.updateServicesSection);
router.put('/milestones', auth, kidsDentistryController.updateMilestonesSection);
router.put('/cta', auth, kidsDentistryController.updateCTASection);

module.exports = router;