const express = require("express");
const router = express.Router();
const serviceCategoryController = require("../controllers/serviceCategoryController");
const { auth, authorize } = require("../middleware/auth");

// Public routes
router.get("/", serviceCategoryController.getAllCategories);
router.get("/:id", serviceCategoryController.getCategory);

// Admin routes
router.post("/initialize", auth, authorize('admin'), serviceCategoryController.initializeDefaultCategories);
router.post("/", auth, authorize('admin'), serviceCategoryController.createCategory);
router.put("/:id", auth, authorize('admin'), serviceCategoryController.updateCategory);
router.delete("/:id", auth, authorize('admin'), serviceCategoryController.deleteCategory);

module.exports = router;
