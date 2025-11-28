const express = require('express');
const router = express.Router();
const dentalBridgesController = require('../controllers/dentalBridgesController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', dentalBridgesController.getDentalBridgesPage);

// Protected routes (require authentication)
router.put('/hero', auth, dentalBridgesController.updateHero);
router.put('/bridges-in-ottawa', auth, dentalBridgesController.updateBridgesInOttawa);
router.put('/bridge-varieties', auth, dentalBridgesController.updateBridgeVarieties);
router.put('/bridge-process', auth, dentalBridgesController.updateBridgeProcess);
router.put('/long-lasting-results', auth, dentalBridgesController.updateLongLastingResults);
router.put('/faq', auth, dentalBridgesController.updateFaq);
router.put('/cta', auth, dentalBridgesController.updateCta);

module.exports = router;