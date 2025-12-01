const express = require("express");
const router = express.Router();
const staticServiceController = require("../controllers/staticServiceController");

// Optional: Import auth middleware if you have one
// const { protect, admin } = require('../middleware/authMiddleware');

// ============================================================================
// PUBLIC ROUTES (No Authentication Required)
// ============================================================================

// GET /api/static-services - Get all published services
router.get("/", staticServiceController.getAllServices);

// GET /api/static-services/meta/keys - Get all available service keys and metadata
router.get("/meta/keys", staticServiceController.getMetaKeys);

// GET /api/static-services/meta/sections - Get all available section types
router.get("/meta/sections", staticServiceController.getMetaSections);

// GET /api/static-services/:serviceKey - Get single published service (public)
router.get("/:serviceKey", staticServiceController.getService);

// ============================================================================
// ADMIN ROUTES (Authentication Required - uncomment protect/admin middleware)
// ============================================================================

// GET /api/static-services/:serviceKey/admin - Get service for admin (includes drafts)
router.get(
  "/:serviceKey/admin",
  // protect, admin,
  staticServiceController.getServiceAdmin
);

// PUT /api/static-services/:serviceKey - Create or update entire service
router.put(
  "/:serviceKey",
  // protect, admin,
  staticServiceController.upsertService
);

// DELETE /api/static-services/:serviceKey - Delete service
router.delete(
  "/:serviceKey",
  // protect, admin,
  staticServiceController.deleteService
);

// ============================================================================
// SECTION MANAGEMENT ROUTES
// ============================================================================

// PATCH /api/static-services/:serviceKey/section/:sectionName - Update specific section
router.patch(
  "/:serviceKey/section/:sectionName",
  // protect, admin,
  staticServiceController.updateSection
);

// PATCH /api/static-services/:serviceKey/toggle-section/:sectionName - Enable/disable section
router.patch(
  "/:serviceKey/toggle-section/:sectionName",
  // protect, admin,
  staticServiceController.toggleSection
);

// PATCH /api/static-services/:serviceKey/reset-section/:sectionName - Reset section to default
router.patch(
  "/:serviceKey/reset-section/:sectionName",
  // protect, admin,
  staticServiceController.resetSection
);

// PATCH /api/static-services/:serviceKey/section-order - Update section order
router.patch(
  "/:serviceKey/section-order",
  // protect, admin,
  staticServiceController.updateSectionOrder
);

// PATCH /api/static-services/:serviceKey/unified-order - Update unified order (sections + components)
router.patch(
  "/:serviceKey/unified-order",
  // protect, admin,
  staticServiceController.updateUnifiedOrder
);

// ============================================================================
// SECTION ITEM MANAGEMENT ROUTES
// ============================================================================

// POST /api/static-services/:serviceKey/section/:sectionName/items - Add item to section
router.post(
  "/:serviceKey/section/:sectionName/items",
  // protect, admin,
  staticServiceController.addSectionItem
);

// PATCH /api/static-services/:serviceKey/section/:sectionName/items/:itemId - Update specific item
router.patch(
  "/:serviceKey/section/:sectionName/items/:itemId",
  // protect, admin,
  staticServiceController.updateSectionItem
);

// DELETE /api/static-services/:serviceKey/section/:sectionName/items/:itemId - Remove item from section
router.delete(
  "/:serviceKey/section/:sectionName/items/:itemId",
  // protect, admin,
  staticServiceController.removeSectionItem
);

// ============================================================================
// CUSTOM SECTIONS ROUTES
// ============================================================================

// POST /api/static-services/:serviceKey/custom-sections - Add custom section
router.post(
  "/:serviceKey/custom-sections",
  // protect, admin,
  staticServiceController.addCustomSection
);

// PUT /api/static-services/:serviceKey/custom-sections/:sectionId - Update custom section
router.put(
  "/:serviceKey/custom-sections/:sectionId",
  // protect, admin,
  staticServiceController.updateCustomSection
);

// DELETE /api/static-services/:serviceKey/custom-sections/:sectionId - Remove custom section
router.delete(
  "/:serviceKey/custom-sections/:sectionId",
  // protect, admin,
  staticServiceController.removeCustomSection
);

// ============================================================================
// PUBLISHING & STATUS ROUTES
// ============================================================================

// PATCH /api/static-services/:serviceKey/publish - Publish service
router.patch(
  "/:serviceKey/publish",
  // protect, admin,
  staticServiceController.publishService
);

// PATCH /api/static-services/:serviceKey/unpublish - Unpublish service (set to draft)
router.patch(
  "/:serviceKey/unpublish",
  // protect, admin,
  staticServiceController.unpublishService
);

// PATCH /api/static-services/:serviceKey/archive - Archive service
router.patch(
  "/:serviceKey/archive",
  // protect, admin,
  staticServiceController.archiveService
);

// ============================================================================
// BULK OPERATIONS ROUTES
// ============================================================================

// POST /api/static-services/bulk-publish - Publish multiple services
router.post(
  "/bulk-publish",
  // protect, admin,
  staticServiceController.bulkPublish
);

// POST /api/static-services/initialize-all - Initialize all services with default content
router.post(
  "/initialize-all",
  // protect, admin,
  staticServiceController.initializeAllServices
);

// ============================================================================
// UTILITY ROUTES
// ============================================================================

// POST /api/static-services/:serviceKey/duplicate - Duplicate a service page
router.post(
  "/:serviceKey/duplicate",
  // protect, admin,
  staticServiceController.duplicateService
);

// ============================================================================
// RESET & TEMPLATE ROUTES
// ============================================================================

// POST /api/static-services/:serviceKey/reset-page - Reset entire page to defaults
router.post(
  "/:serviceKey/reset-page",
  // protect, admin,
  staticServiceController.resetEntirePage
);

// POST /api/static-services/:serviceKey/add-template - Add template components to page
router.post(
  "/:serviceKey/add-template",
  // protect, admin,
  staticServiceController.addTemplateToPage
);

// POST /api/static-services/:serviceKey/add-custom-component - Add a custom component
router.post(
  "/:serviceKey/add-custom-component",
  // protect, admin,
  staticServiceController.addCustomComponent
);

// DELETE /api/static-services/:serviceKey/custom-component/:componentId - Remove custom component
router.delete(
  "/:serviceKey/custom-component/:componentId",
  // protect, admin,
  staticServiceController.removeCustomComponent
);

// PATCH /api/static-services/:serviceKey/reorder-custom-components - Reorder custom components
router.patch(
  "/:serviceKey/reorder-custom-components",
  // protect, admin,
  staticServiceController.reorderCustomComponents
);

// PUT /api/static-services/:serviceKey/custom-component/:componentId - Update custom component
router.put(
  "/:serviceKey/custom-component/:componentId",
  // protect, admin,
  staticServiceController.updateCustomComponent
);

// PATCH /api/static-services/:serviceKey/custom-component/:componentId - Partial update custom component
router.patch(
  "/:serviceKey/custom-component/:componentId",
  // protect, admin,
  staticServiceController.updateCustomComponent
);

// GET /api/static-services/:serviceKey/custom-components - Get all custom components
router.get(
  "/:serviceKey/custom-components",
  // protect, admin,
  staticServiceController.getCustomComponents
);

module.exports = router;
