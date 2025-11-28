const express = require('express');
const router = express.Router();
const dentalCrownsController = require('../controllers/dentalCrownsController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', dentalCrownsController.getDentalCrownsPage);

// Protected routes (require authentication)
router.put('/hero', auth, dentalCrownsController.updateHero);
router.put('/crowns-in-ottawa', auth, dentalCrownsController.updateCrownsInOttawa);
router.put('/when-you-need-crown', auth, dentalCrownsController.updateWhenYouNeedCrown);
router.put('/types-of-crowns', auth, dentalCrownsController.updateTypesOfCrowns);
router.put('/crown-process', auth, dentalCrownsController.updateCrownProcess);
router.put('/care-after-crown', auth, dentalCrownsController.updateCareAfterCrown);
router.put('/crowns-and-bridges', auth, dentalCrownsController.updateCrownsAndBridges);
router.put('/faq', auth, dentalCrownsController.updateFaq);
router.put('/cta', auth, dentalCrownsController.updateCta);

module.exports = router;