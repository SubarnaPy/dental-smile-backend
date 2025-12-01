const ServiceCategory = require("../models/ServiceCategory");

const getAllCategories = async (req, res) => {
  try {
    const { includeInactive } = req.query;
    const query = includeInactive ? {} : { isActive: true };

    const categories = await ServiceCategory.find(query).sort({ order: 1, name: 1 });

    res.json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await ServiceCategory.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.json({ success: true, data: category });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, displayName, description, color, icon, order } = req.body;

    if (!name || !displayName) {
      return res.status(400).json({ success: false, message: "Name and displayName are required" });
    }

    // Generate slug from name
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const existingCategory = await ServiceCategory.findOne({ $or: [{ name }, { slug }] });
    if (existingCategory) {
      return res.status(400).json({ success: false, message: "Category with this name or slug already exists" });
    }

    const category = await ServiceCategory.create({
      name,
      slug,
      displayName,
      description,
      color,
      icon,
      order,
      createdBy: req.user?._id,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, displayName, description, color, icon, order, isActive } = req.body;

    const category = await ServiceCategory.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    if (category.isDefault && isActive === false) {
      return res.status(400).json({ success: false, message: "Cannot deactivate default category" });
    }

    if (name && name !== category.name) {
      const existingCategory = await ServiceCategory.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ success: false, message: "Category with this name already exists" });
      }
    }

    Object.assign(category, {
      name: name || category.name,
      displayName: displayName || category.displayName,
      description: description !== undefined ? description : category.description,
      color: color || category.color,
      icon: icon || category.icon,
      order: order !== undefined ? order : category.order,
      isActive: isActive !== undefined ? isActive : category.isActive,
      updatedBy: req.user?._id,
    });

    await category.save();

    res.json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await ServiceCategory.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    if (category.isDefault) {
      return res.status(400).json({ success: false, message: "Cannot delete default category" });
    }

    await category.deleteOne();

    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const initializeDefaultCategories = async (req, res) => {
  try {
    const defaultCategories = [
      {
        name: "General Dentistry",
        slug: "general-dentistry",
        displayName: "General Dentistry",
        description: "Routine dental care and preventive services",
        color: "#5FC1D7",
        icon: "Shield",
        order: 1,
        isDefault: true,
      },
      {
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        displayName: "Cosmetic Dentistry",
        description: "Aesthetic dental treatments to enhance your smile",
        color: "#27A8E0",
        icon: "Sparkles",
        order: 2,
        isDefault: true,
      },
      {
        name: "Restorative Dentistry",
        slug: "restorative-dentistry",
        displayName: "Restorative Dentistry",
        description: "Treatments to restore damaged or missing teeth",
        color: "#10b981",
        icon: "Wrench",
        order: 3,
        isDefault: true,
      },
    ];

    const results = { created: [], skipped: [] };

    for (const catData of defaultCategories) {
      const existing = await ServiceCategory.findOne({ slug: catData.slug });
      if (existing) {
        results.skipped.push(catData.name);
      } else {
        await ServiceCategory.create(catData);
        results.created.push(catData.name);
      }
    }

    res.json({
      success: true,
      message: "Default categories initialized",
      data: results,
    });
  } catch (error) {
    console.error("Error initializing categories:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  initializeDefaultCategories,
};
