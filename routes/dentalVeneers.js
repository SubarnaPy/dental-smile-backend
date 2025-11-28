const express = require('express');
const router = express.Router();
const dentalVeneersController = require('../controllers/dentalVeneersController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', dentalVeneersController.getDentalVeneersPage);

// Admin routes (protected)
router.get('/admin', auth, dentalVeneersController.getDentalVeneersPageAdmin);
router.put('/', auth, dentalVeneersController.updateDentalVeneersPage);

// Section management routes
router.post('/sections', auth, dentalVeneersController.addSection);
router.put('/sections/:sectionId', auth, dentalVeneersController.updateSection);
router.delete('/sections/:sectionId', auth, dentalVeneersController.deleteSection);
router.patch('/sections/:sectionId/toggle', auth, dentalVeneersController.toggleSection);
router.put('/sections/reorder', auth, dentalVeneersController.reorderSections);

// Subsection management routes
router.post('/sections/:sectionId/subsections', auth, dentalVeneersController.addSubsection);
router.put('/sections/:sectionId/subsections/:subsectionId', auth, dentalVeneersController.updateSubsection);
router.delete('/sections/:sectionId/subsections/:subsectionId', auth, dentalVeneersController.deleteSubsection);
router.patch('/sections/:sectionId/subsections/:subsectionId/toggle', auth, dentalVeneersController.toggleSubsection);
router.put('/sections/:sectionId/subsections/reorder', auth, dentalVeneersController.reorderSubsections);

module.exports = router;