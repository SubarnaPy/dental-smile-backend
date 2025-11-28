const StaticServicePage = require("../models/StaticServicePage");

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Get all available service keys
const getServiceKeys = () => [
  "emergency-dentistry",
  "dental-exams-cleanings",
  "family-dentistry",
  "kids-dentistry",
  "tooth-extractions",
  "dental-fillings",
  "dental-sealants",
  "nitrous-sedation",
  "night-guards",
  "dental-bonding",
  "dental-crowns",
  "dental-bridges",
  "dental-implants",
  "partial-dentures",
  "tmj-consult",
  "root-canal-therapy",
  "teeth-whitening",
  "dental-veneers",
  "clear-aligners",
];

// Get display names for service keys
const getDisplayNames = () => ({
  "emergency-dentistry": "Emergency Dentistry",
  "dental-exams-cleanings": "Dental Exams & Cleanings",
  "family-dentistry": "Family Dentistry",
  "kids-dentistry": "Kids Dentistry",
  "tooth-extractions": "Tooth Extractions",
  "dental-fillings": "Dental Fillings",
  "dental-sealants": "Dental Sealants",
  "nitrous-sedation": "Nitrous Sedation",
  "night-guards": "Night Guards",
  "dental-bonding": "Dental Bonding",
  "dental-crowns": "Dental Crowns",
  "dental-bridges": "Dental Bridges",
  "dental-implants": "Dental Implants",
  "partial-dentures": "Partial Dentures",
  "tmj-consult": "TMJ Consult",
  "root-canal-therapy": "Root Canal Therapy",
  "teeth-whitening": "Teeth Whitening",
  "dental-veneers": "Dental Veneers",
  "clear-aligners": "Clear Aligners",
});

// Get category for service key
const getCategory = (serviceKey) => {
  const categories = {
    "emergency-dentistry": "emergency",
    "dental-exams-cleanings": "preventive",
    "family-dentistry": "preventive",
    "kids-dentistry": "preventive",
    "tooth-extractions": "restorative",
    "dental-fillings": "restorative",
    "dental-sealants": "preventive",
    "nitrous-sedation": "specialty",
    "night-guards": "specialty",
    "dental-bonding": "cosmetic",
    "dental-crowns": "restorative",
    "dental-bridges": "restorative",
    "dental-implants": "restorative",
    "partial-dentures": "restorative",
    "tmj-consult": "specialty",
    "root-canal-therapy": "restorative",
    "teeth-whitening": "cosmetic",
    "dental-veneers": "cosmetic",
    "clear-aligners": "orthodontic",
  };
  return categories[serviceKey] || "general";
};

// ============================================================================
// PUBLIC ENDPOINTS (No Auth Required)
// ============================================================================

// GET /api/static-services - List all published services
exports.getAllServices = async (req, res) => {
  try {
    const { category, status } = req.query;
    const query = {};

    // Only filter by status if provided and not "all"
    if (status && status !== "all") {
      query.status = status;
    }

    // Only filter by category if provided and not "all"
    if (category && category !== "all") {
      query.category = category;
    }

    const services = await StaticServicePage.find(query)
      .populate("category", "name displayName slug color icon")
      .select(
        "serviceKey title displayName slug category status hero.title hero.description updatedAt",
      )
      .sort({ title: 1 });

    res.json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// GET /api/static-services/:serviceKey - Get single service (public)
exports.getService = async (req, res) => {
  try {
    const { serviceKey } = req.params;

    const service = await StaticServicePage.findOne({
      serviceKey,
      status: "published",
    }).populate("category", "name displayName slug color icon");

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found or not published",
      });
    }

    res.json({ success: true, data: service });
  } catch (error) {
    console.error("Error fetching service:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// ============================================================================
// ADMIN ENDPOINTS (Auth Required)
// ============================================================================

// GET /api/static-services/:serviceKey/admin - Get service for admin (includes drafts)
exports.getServiceAdmin = async (req, res) => {
  try {
    const { serviceKey } = req.params;

    const service = await StaticServicePage.findOne({ serviceKey }).populate("category", "name displayName slug color icon");

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({ success: true, data: service });
  } catch (error) {
    console.error("Error fetching service for admin:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PUT /api/static-services/:serviceKey - Create or update entire service
exports.upsertService = async (req, res) => {
  try {
    const { serviceKey } = req.params;
    const updateData = req.body;

    // Validate service key
    if (!getServiceKeys().includes(serviceKey)) {
      return res.status(400).json({
        success: false,
        message: "Invalid service key",
      });
    }

    // Add metadata
    updateData.serviceKey = serviceKey;
    updateData.updatedAt = new Date();

    if (!updateData.displayName) {
      updateData.displayName = getDisplayNames()[serviceKey];
    }
    if (!updateData.title) {
      updateData.title = getDisplayNames()[serviceKey];
    }
    if (!updateData.slug) {
      updateData.slug = serviceKey;
    }
    if (!updateData.category) {
      updateData.category = getCategory(serviceKey);
    }

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: updateData },
      { new: true, upsert: true, runValidators: true },
    );

    res.json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    console.error("Error upserting service:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/section/:sectionName - Update specific section
exports.updateSection = async (req, res) => {
  try {
    const { serviceKey, sectionName } = req.params;
    const sectionData = req.body;

    // Validate section name
    const validSections = [
      "hero",
      "introduction",
      "benefits",
      "features",
      "process",
      "whatToExpect",
      "types",
      "comparison",
      "tips",
      "aftercare",
      "ageGroups",
      "technology",
      "serviceList",
      "stats",
      "faq",
      "cta",
      "brandColors",
      "seo",
      // New service-specific sections
      "allOnFour",
      "seniors",
      "treatments",
      "treatmentBenefits",
      "approach",
      "whenNeeded",
      "results",
      "veneerBenefits",
      "care",
      "importance",
      "offerings",
      "suitability",
      "getStarted",
      "partialBenefits",
      "services",
    ];

    if (!validSections.includes(sectionName)) {
      return res.status(400).json({
        success: false,
        message: `Invalid section name. Valid sections: ${validSections.join(", ")}`,
      });
    }

    const updateQuery = { [`${sectionName}`]: sectionData };

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: updateQuery, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: `Section "${sectionName}" updated successfully`,
      data: service[sectionName],
    });
  } catch (error) {
    console.error("Error updating section:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/section/:sectionName/items - Add item to section
exports.addSectionItem = async (req, res) => {
  try {
    const { serviceKey, sectionName } = req.params;
    const itemData = req.body;

    // Sections that support items array
    const itemSections = [
      "benefits",
      "features",
      "faq",
      "tips",
      "whatToExpect",
      "types",
      "comparison",
      "process",
      "aftercare",
      "ageGroups",
      "technology",
      "stats",
      // New service-specific sections
      "allOnFour",
      "seniors",
      "treatments",
      "treatmentBenefits",
      "approach",
      "whenNeeded",
      "results",
      "veneerBenefits",
      "care",
      "importance",
      "offerings",
      "suitability",
      "getStarted",
      "partialBenefits",
      "services",
    ];

    if (!itemSections.includes(sectionName)) {
      return res.status(400).json({
        success: false,
        message: `Section "${sectionName}" does not support items`,
      });
    }

    // Determine the correct items field based on section
    let itemsField = "items";
    if (sectionName === "faq") itemsField = "faqs";
    if (
      sectionName === "tips" ||
      sectionName === "whatToExpect" ||
      sectionName === "aftercare" ||
      sectionName === "veneerBenefits" ||
      sectionName === "care" ||
      sectionName === "importance" ||
      sectionName === "suitability" ||
      sectionName === "results"
    )
      itemsField = "sections";
    if (sectionName === "types") itemsField = "types";
    if (sectionName === "comparison") itemsField = "comparisons";
    if (sectionName === "ageGroups") itemsField = "groups";
    if (sectionName === "process" || sectionName === "getStarted")
      itemsField = "steps";
    if (sectionName === "stats") itemsField = "stats";
    // New sections that use "items" field (default): allOnFour, seniors, treatments, treatmentBenefits, approach, whenNeeded, offerings, partialBenefits, services

    const pushQuery = { [`${sectionName}.${itemsField}`]: itemData };

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $push: pushQuery, $set: { updatedAt: new Date() } },
      { new: true, runValidators: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: `Item added to "${sectionName}" successfully`,
      data: service[sectionName],
    });
  } catch (error) {
    console.error("Error adding section item:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// DELETE /api/static-services/:serviceKey/section/:sectionName/items/:itemId - Remove item from section
exports.removeSectionItem = async (req, res) => {
  try {
    const { serviceKey, sectionName, itemId } = req.params;

    // Determine the correct items field
    let itemsField = "items";
    if (sectionName === "faq") itemsField = "faqs";
    if (
      sectionName === "tips" ||
      sectionName === "whatToExpect" ||
      sectionName === "aftercare" ||
      sectionName === "veneerBenefits" ||
      sectionName === "care" ||
      sectionName === "importance" ||
      sectionName === "suitability" ||
      sectionName === "results"
    )
      itemsField = "sections";
    if (sectionName === "types") itemsField = "types";
    if (sectionName === "comparison") itemsField = "comparisons";
    if (sectionName === "ageGroups") itemsField = "groups";
    if (sectionName === "process" || sectionName === "getStarted")
      itemsField = "steps";
    if (sectionName === "stats") itemsField = "stats";

    const pullQuery = { [`${sectionName}.${itemsField}`]: { _id: itemId } };

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $pull: pullQuery, $set: { updatedAt: new Date() } },
      { new: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: `Item removed from "${sectionName}" successfully`,
      data: service[sectionName],
    });
  } catch (error) {
    console.error("Error removing section item:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/section/:sectionName/items/:itemId - Update specific item
exports.updateSectionItem = async (req, res) => {
  try {
    const { serviceKey, sectionName, itemId } = req.params;
    const itemData = req.body;

    // Determine the correct items field
    let itemsField = "items";
    if (sectionName === "faq") itemsField = "faqs";
    if (
      sectionName === "tips" ||
      sectionName === "whatToExpect" ||
      sectionName === "aftercare" ||
      sectionName === "veneerBenefits" ||
      sectionName === "care" ||
      sectionName === "importance" ||
      sectionName === "suitability" ||
      sectionName === "results"
    )
      itemsField = "sections";
    if (sectionName === "types") itemsField = "types";
    if (sectionName === "comparison") itemsField = "comparisons";
    if (sectionName === "ageGroups") itemsField = "groups";
    if (sectionName === "process" || sectionName === "getStarted")
      itemsField = "steps";
    if (sectionName === "stats") itemsField = "stats";

    // Build update query for nested array item
    const updateFields = {};
    Object.keys(itemData).forEach((key) => {
      updateFields[`${sectionName}.${itemsField}.$[elem].${key}`] =
        itemData[key];
    });

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: { ...updateFields, updatedAt: new Date() } },
      {
        new: true,
        arrayFilters: [{ "elem._id": itemId }],
        runValidators: true,
      },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: `Item updated in "${sectionName}" successfully`,
      data: service[sectionName],
    });
  } catch (error) {
    console.error("Error updating section item:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/section-order - Update section order
exports.updateSectionOrder = async (req, res) => {
  try {
    const { serviceKey } = req.params;
    const { sectionOrder } = req.body;

    if (!Array.isArray(sectionOrder)) {
      return res.status(400).json({
        success: false,
        message: "sectionOrder must be an array",
      });
    }

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: { sectionOrder, updatedAt: new Date() } },
      { new: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Section order updated successfully",
      data: service.sectionOrder,
    });
  } catch (error) {
    console.error("Error updating section order:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/toggle-section/:sectionName - Enable/disable section
exports.toggleSection = async (req, res) => {
  try {
    const { serviceKey, sectionName } = req.params;
    const { enabled } = req.body;

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: { [`${sectionName}.enabled`]: enabled, updatedAt: new Date() } },
      { new: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: `Section "${sectionName}" ${enabled ? "enabled" : "disabled"} successfully`,
      data: { enabled: service[sectionName]?.enabled },
    });
  } catch (error) {
    console.error("Error toggling section:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/reset-section/:sectionName - Reset section to default
exports.resetSection = async (req, res) => {
  try {
    const { serviceKey, sectionName } = req.params;

    const service = await StaticServicePage.findOne({ serviceKey });
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const displayName = service.displayName || getDisplayNames()[serviceKey];
    const defaultData = createDefaultServiceData(serviceKey, displayName);
    const defaultSection = defaultData[sectionName];

    if (!defaultSection) {
      return res.status(400).json({
        success: false,
        message: `Section "${sectionName}" not found in defaults`,
      });
    }

    const updatedService = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: { [sectionName]: defaultSection, updatedAt: new Date() } },
      { new: true },
    );

    res.json({
      success: true,
      message: `Section "${sectionName}" reset to default successfully`,
      data: updatedService[sectionName],
    });
  } catch (error) {
    console.error("Error resetting section:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// ============================================================================
// CUSTOM SECTIONS MANAGEMENT
// ============================================================================

// POST /api/static-services/:serviceKey/custom-sections - Add custom section
exports.addCustomSection = async (req, res) => {
  try {
    const { serviceKey } = req.params;
    const customSection = req.body;

    // Generate unique section ID if not provided
    if (!customSection.sectionId) {
      customSection.sectionId = `custom-${Date.now()}`;
    }

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      {
        $push: { customSections: customSection },
        $set: { updatedAt: new Date() },
      },
      { new: true, runValidators: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Custom section added successfully",
      data: service.customSections,
    });
  } catch (error) {
    console.error("Error adding custom section:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PUT /api/static-services/:serviceKey/custom-sections/:sectionId - Update custom section
exports.updateCustomSection = async (req, res) => {
  try {
    const { serviceKey, sectionId } = req.params;
    const updateData = req.body;

    const updateFields = {};
    Object.keys(updateData).forEach((key) => {
      updateFields[`customSections.$[elem].${key}`] = updateData[key];
    });

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: { ...updateFields, updatedAt: new Date() } },
      {
        new: true,
        arrayFilters: [{ "elem.sectionId": sectionId }],
        runValidators: true,
      },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Custom section updated successfully",
      data: service.customSections.find((s) => s.sectionId === sectionId),
    });
  } catch (error) {
    console.error("Error updating custom section:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// DELETE /api/static-services/:serviceKey/custom-sections/:sectionId - Remove custom section
exports.removeCustomSection = async (req, res) => {
  try {
    const { serviceKey, sectionId } = req.params;

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      {
        $pull: { customSections: { sectionId } },
        $set: { updatedAt: new Date() },
      },
      { new: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Custom section removed successfully",
      data: service.customSections,
    });
  } catch (error) {
    console.error("Error removing custom section:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// ============================================================================
// PUBLISHING & STATUS MANAGEMENT
// ============================================================================

// PATCH /api/static-services/:serviceKey/publish - Publish service
exports.publishService = async (req, res) => {
  try {
    const { serviceKey } = req.params;

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      {
        $set: {
          status: "published",
          publishedAt: new Date(),
          updatedAt: new Date(),
        },
      },
      { new: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Service published successfully",
      data: { status: service.status, publishedAt: service.publishedAt },
    });
  } catch (error) {
    console.error("Error publishing service:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/unpublish - Unpublish service
exports.unpublishService = async (req, res) => {
  try {
    const { serviceKey } = req.params;

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: { status: "draft", updatedAt: new Date() } },
      { new: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Service unpublished successfully",
      data: { status: service.status },
    });
  } catch (error) {
    console.error("Error unpublishing service:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// PATCH /api/static-services/:serviceKey/archive - Archive service
exports.archiveService = async (req, res) => {
  try {
    const { serviceKey } = req.params;

    const service = await StaticServicePage.findOneAndUpdate(
      { serviceKey },
      { $set: { status: "archived", updatedAt: new Date() } },
      { new: true },
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Service archived successfully",
      data: { status: service.status },
    });
  } catch (error) {
    console.error("Error archiving service:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// DELETE /api/static-services/:serviceKey - Delete service
exports.deleteService = async (req, res) => {
  try {
    const { serviceKey } = req.params;

    const service = await StaticServicePage.findOneAndDelete({ serviceKey });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// ============================================================================
// BULK OPERATIONS
// ============================================================================

// POST /api/static-services/bulk-publish - Publish multiple services
exports.bulkPublish = async (req, res) => {
  try {
    const { serviceKeys } = req.body;

    if (!Array.isArray(serviceKeys) || serviceKeys.length === 0) {
      return res.status(400).json({
        success: false,
        message: "serviceKeys must be a non-empty array",
      });
    }

    const result = await StaticServicePage.updateMany(
      { serviceKey: { $in: serviceKeys } },
      {
        $set: {
          status: "published",
          publishedAt: new Date(),
          updatedAt: new Date(),
        },
      },
    );

    res.json({
      success: true,
      message: `${result.modifiedCount} services published successfully`,
      data: { modifiedCount: result.modifiedCount },
    });
  } catch (error) {
    console.error("Error bulk publishing:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// ============================================================================
// META ENDPOINTS
// ============================================================================

// GET /api/static-services/meta/keys - Get all available service keys
exports.getMetaKeys = async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        serviceKeys: getServiceKeys(),
        displayNames: getDisplayNames(),
        categories: [
          "preventive",
          "restorative",
          "cosmetic",
          "emergency",
          "specialty",
          "orthodontic",
        ],
      },
    });
  } catch (error) {
    console.error("Error fetching meta keys:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// GET /api/static-services/meta/sections - Get all available section types
exports.getMetaSections = async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        standardSections: [
          { name: "hero", label: "Hero Section", hasItems: false },
          { name: "introduction", label: "Introduction", hasItems: false },
          {
            name: "benefits",
            label: "Benefits",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "features",
            label: "Features",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "process",
            label: "Process/Steps",
            hasItems: true,
            itemsField: "steps",
          },
          {
            name: "whatToExpect",
            label: "What to Expect",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "types",
            label: "Types/Varieties",
            hasItems: true,
            itemsField: "types",
          },
          {
            name: "comparison",
            label: "Comparison",
            hasItems: true,
            itemsField: "comparisons",
          },
          {
            name: "tips",
            label: "Tips/Care",
            hasItems: true,
            itemsField: "sections",
          },
          {
            name: "aftercare",
            label: "Aftercare",
            hasItems: true,
            itemsField: "sections",
          },
          {
            name: "ageGroups",
            label: "Age Groups",
            hasItems: true,
            itemsField: "groups",
          },
          {
            name: "technology",
            label: "Technology",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "serviceList",
            label: "Service List",
            hasItems: true,
            itemsField: "categories",
          },
          {
            name: "stats",
            label: "Statistics",
            hasItems: true,
            itemsField: "stats",
          },
          { name: "faq", label: "FAQ", hasItems: true, itemsField: "faqs" },
          { name: "cta", label: "Call to Action", hasItems: false },
          // New service-specific sections
          {
            name: "allOnFour",
            label: "All-on-Four Implants",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "seniors",
            label: "Seniors Section",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "treatments",
            label: "Treatments",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "treatmentBenefits",
            label: "Treatment Benefits",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "approach",
            label: "Our Approach",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "whenNeeded",
            label: "When Needed",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "results",
            label: "Results",
            hasItems: true,
            itemsField: "sections",
          },
          {
            name: "veneerBenefits",
            label: "Veneer Benefits",
            hasItems: true,
            itemsField: "sections",
          },
          {
            name: "care",
            label: "Care Instructions",
            hasItems: true,
            itemsField: "sections",
          },
          {
            name: "importance",
            label: "Importance",
            hasItems: true,
            itemsField: "sections",
          },
          {
            name: "offerings",
            label: "Our Offerings",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "suitability",
            label: "Suitability",
            hasItems: true,
            itemsField: "sections",
          },
          {
            name: "getStarted",
            label: "Get Started",
            hasItems: true,
            itemsField: "steps",
          },
          {
            name: "partialBenefits",
            label: "Partial Benefits",
            hasItems: true,
            itemsField: "items",
          },
          {
            name: "services",
            label: "Services",
            hasItems: true,
            itemsField: "items",
          },
        ],
        customSectionTypes: [
          "text",
          "text-image",
          "cards",
          "list",
          "steps",
          "comparison",
          "faq",
          "cta",
          "gallery",
          "testimonials",
        ],
      },
    });
  } catch (error) {
    console.error("Error fetching meta sections:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// ============================================================================
// INITIALIZATION - Create default service pages
// ============================================================================

// POST /api/static-services/initialize-all - Initialize all service pages with default content
exports.initializeAllServices = async (req, res) => {
  try {
    const { overwrite } = req.body;
    const serviceKeys = getServiceKeys();
    const displayNames = getDisplayNames();
    const results = { created: [], skipped: [], errors: [] };

    for (const serviceKey of serviceKeys) {
      try {
        const existing = await StaticServicePage.findOne({ serviceKey });

        if (existing && !overwrite) {
          results.skipped.push(serviceKey);
          continue;
        }

        const defaultData = createDefaultServiceData(
          serviceKey,
          displayNames[serviceKey],
        );

        if (existing && overwrite) {
          await StaticServicePage.findOneAndUpdate(
            { serviceKey },
            { $set: defaultData },
            { runValidators: true },
          );
        } else {
          await StaticServicePage.create(defaultData);
        }

        results.created.push(serviceKey);
      } catch (err) {
        results.errors.push({ serviceKey, error: err.message });
      }
    }

    res.json({
      success: true,
      message: "Initialization complete",
      data: results,
    });
  } catch (error) {
    console.error("Error initializing services:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

function createDefaultServiceData(serviceKey, displayName) {
  const category = getCategory(serviceKey);

  return {
    serviceKey,
    title: displayName,
    displayName,
    slug: serviceKey,
    category,
    status: "draft",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#d97706",
    },
    hero: {
      enabled: true,
      category: category.toUpperCase().replace("-", " "),
      categoryColor: "#5FC1D7",
      title: displayName,
      description: `Learn about our ${displayName.toLowerCase()} services at Smile Health Dental. Dr. Avneet Dhaliwal and our team provide high-quality dental care in Ottawa.`,
      primaryButtonText: "Request an Appointment",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/placeholder.png",
      heroImageAlt: displayName,
      gradientFrom: "blue-50",
      gradientTo: "white",
    },
    benefits: {
      enabled: true,
      title: `Why Choose ${displayName}?`,
      subtitle: `Discover the benefits of our ${displayName.toLowerCase()} services`,
      backgroundColor: "gray-50",
      items: [
        {
          icon: "Shield",
          iconColor: "#5FC1D7",
          title: "Expert Care",
          description:
            "Dr. Dhaliwal provides professional, experienced dental care",
          order: 1,
        },
        {
          icon: "Heart",
          iconColor: "#27A8E0",
          title: "Patient Comfort",
          description: "We prioritize your comfort throughout every procedure",
          order: 2,
        },
        {
          icon: "Award",
          iconColor: "#10b981",
          title: "Quality Results",
          description:
            "Modern techniques and technology for excellent outcomes",
          order: 3,
        },
      ],
    },
    features: {
      enabled: false,
      title: "Our Approach",
      subtitle: "",
      backgroundColor: "white",
      items: [],
    },
    process: {
      enabled: false,
      title: "The Process",
      subtitle: "",
      backgroundColor: "gray-50",
      steps: [],
    },
    whatToExpect: {
      enabled: false,
      title: "What to Expect",
      subtitle: "",
      backgroundColor: "white",
      items: [],
    },
    types: {
      enabled: false,
      title: "Options Available",
      subtitle: "",
      backgroundColor: "gray-50",
      types: [],
    },
    comparison: {
      enabled: false,
      title: "Comparison",
      subtitle: "",
      backgroundColor: "white",
      comparisons: [],
    },
    tips: {
      enabled: false,
      title: "Care Tips",
      subtitle: "",
      backgroundColor: "white",
      sections: [],
    },
    aftercare: {
      enabled: false,
      title: "Aftercare",
      subtitle: "",
      backgroundColor: "gray-50",
      sections: [],
    },
    ageGroups: {
      enabled: false,
      title: "Age Groups",
      subtitle: "",
      backgroundColor: "white",
      groups: [],
    },
    technology: {
      enabled: false,
      title: "Technology",
      subtitle: "",
      backgroundColor: "white",
      items: [],
    },
    serviceList: {
      enabled: false,
      title: "Services",
      subtitle: "",
      backgroundColor: "gray-50",
      categories: [],
    },
    stats: {
      enabled: false,
      title: "Statistics",
      subtitle: "",
      backgroundColor: "white",
      stats: [],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      subtitle: `Common questions about ${displayName.toLowerCase()}`,
      backgroundColor: "gray-50",
      faqs: [
        {
          question: `What is ${displayName.toLowerCase()}?`,
          answer: `${displayName} is a dental service we provide at Smile Health Dental. Contact us to learn more about how we can help you.`,
          order: 1,
        },
        {
          question: "How do I schedule an appointment?",
          answer:
            "You can call us at 437-913-9288 or use our online booking form to schedule your appointment.",
          order: 2,
        },
        {
          question: "Do you accept insurance?",
          answer:
            "Yes, we accept most dental insurance plans. Please contact our office to verify your coverage.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: `Schedule Your ${displayName} Consultation`,
      description: `Visit Smile Health Dental for quality ${displayName.toLowerCase()} services. Dr. Dhaliwal and our team are here to help you achieve optimal oral health.`,
      gradientFrom: "slate-700",
      gradientVia: "blue-700",
      gradientTo: "sky-700",
      primaryButtonText: "Request an Appointment",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Contact Us",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    customSections: [],
    sectionOrder: ["hero", "benefits", "faq", "cta"],
    seo: {
      metaTitle: `${displayName} in Ottawa | Smile Health Dental`,
      metaDescription: `Professional ${displayName.toLowerCase()} services at Smile Health Dental in Ottawa. Dr. Avneet Dhaliwal provides quality dental care for patients of all ages.`,
      metaKeywords: [
        displayName.toLowerCase(),
        "dentist ottawa",
        "dental care",
        "smile health dental",
      ],
    },
  };
}

// ============================================================================
// DUPLICATE SERVICE (for creating variations)
// ============================================================================

// POST /api/static-services/:serviceKey/duplicate - Duplicate a service page
exports.duplicateService = async (req, res) => {
  try {
    const { serviceKey } = req.params;
    const { newServiceKey } = req.body;

    if (!newServiceKey) {
      return res.status(400).json({
        success: false,
        message: "newServiceKey is required",
      });
    }

    const existingService = await StaticServicePage.findOne({ serviceKey });

    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // Check if new key already exists
    const duplicateExists = await StaticServicePage.findOne({
      serviceKey: newServiceKey,
    });
    if (duplicateExists) {
      return res.status(400).json({
        success: false,
        message: "Service with this key already exists",
      });
    }

    // Create duplicate
    const serviceData = existingService.toObject();
    delete serviceData._id;
    delete serviceData.__v;
    serviceData.serviceKey = newServiceKey;
    serviceData.slug = newServiceKey;
    serviceData.status = "draft";
    serviceData.createdAt = new Date();
    serviceData.updatedAt = new Date();
    serviceData.publishedAt = null;

    const newService = await StaticServicePage.create(serviceData);

    res.json({
      success: true,
      message: "Service duplicated successfully",
      data: newService,
    });
  } catch (error) {
    console.error("Error duplicating service:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// ============================================================================
// EXPORT CONTROLLER FUNCTIONS
// ============================================================================

module.exports = exports;
