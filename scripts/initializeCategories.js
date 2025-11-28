require("dotenv").config();
const mongoose = require("mongoose");
const ServiceCategory = require("../models/ServiceCategory");

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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
  },
];

async function initializeCategories() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    for (const catData of defaultCategories) {
      const existing = await ServiceCategory.findOne({ slug: catData.slug });
      if (existing) {
        console.log(`✓ Category "${catData.name}" already exists`);
      } else {
        await ServiceCategory.create(catData);
        console.log(`✓ Created category "${catData.name}"`);
      }
    }

    console.log("\n✅ Categories initialized successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

initializeCategories();
