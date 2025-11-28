const express = require('express');
const router = express.Router();
const dentalImplantsController = require('../controllers/dentalImplantsController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', dentalImplantsController.getDentalImplantsPage);

// Protected routes (require authentication)
router.put('/hero', auth, dentalImplantsController.updateHero);
router.put('/implants-in-ottawa', auth, dentalImplantsController.updateImplantsInOttawa);
router.put('/why-choose-implants', auth, dentalImplantsController.updateWhyChooseImplants);
router.put('/all-on-four', auth, dentalImplantsController.updateAllOnFour);
router.put('/implants-for-seniors', auth, dentalImplantsController.updateImplantsForSeniors);
router.put('/faq', auth, dentalImplantsController.updateFaq);
router.put('/cta', auth, dentalImplantsController.updateCta);

module.exports = router;