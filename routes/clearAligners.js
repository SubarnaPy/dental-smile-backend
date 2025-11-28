const express = require('express');
const router = express.Router();
const clearAlignersController = require('../controllers/clearAlignersController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', clearAlignersController.getClearAlignersPage);

// Admin routes (protected)
router.get('/admin', auth, clearAlignersController.getClearAlignersPageAdmin);
router.put('/', auth, clearAlignersController.updateClearAlignersPage);

// Section management routes
router.post('/sections', auth, clearAlignersController.addSection);
router.put('/sections/:sectionId', auth, clearAlignersController.updateSection);
router.delete('/sections/:sectionId', auth, clearAlignersController.deleteSection);
router.patch('/sections/:sectionId/toggle', auth, clearAlignersController.toggleSection);
router.put('/sections/reorder', auth, clearAlignersController.reorderSections);

// Subsection management routes
router.post('/sections/:sectionId/subsections', auth, clearAlignersController.addSubsection);
router.put('/sections/:sectionId/subsections/:subsectionId', auth, clearAlignersController.updateSubsection);
router.delete('/sections/:sectionId/subsections/:subsectionId', auth, clearAlignersController.deleteSubsection);
router.patch('/sections/:sectionId/subsections/:subsectionId/toggle', auth, clearAlignersController.toggleSubsection);
router.put('/sections/:sectionId/subsections/reorder', auth, clearAlignersController.reorderSubsections);

module.exports = router;