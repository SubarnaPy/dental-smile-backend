/**
 * Quick script to check database data
 */

const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const StaticServicePage = require("../models/StaticServicePage");

// MongoDB connection - Use MONGO_URI from .env (or MONGODB_URI as fallback)
const MONGODB_URI =
  process.env.MONGO_URI ||
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/dental-smile";

async function checkData() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected!\n");

    // Check Emergency Dentistry
    console.log("============================================");
    console.log("=== EMERGENCY DENTISTRY DATA ===");
    console.log("============================================\n");

    const emergency = await StaticServicePage.findOne({
      serviceKey: "emergency-dentistry",
    });

    if (emergency) {
      console.log("--- HERO SECTION ---");
      console.log("Title:", emergency.hero?.title);
      console.log("Category:", emergency.hero?.category);
      console.log(
        "Description:",
        emergency.hero?.description?.substring(0, 100) + "...",
      );

      console.log("\n--- BENEFITS SECTION ---");
      console.log("Enabled:", emergency.benefits?.enabled);
      console.log("Title:", emergency.benefits?.title);
      console.log("Items Count:", emergency.benefits?.items?.length || 0);
      if (emergency.benefits?.items?.length > 0) {
        emergency.benefits.items.forEach((item, i) => {
          console.log(`  ${i + 1}. ${item.title}`);
        });
      }

      console.log("\n--- FEATURES SECTION ---");
      console.log("Enabled:", emergency.features?.enabled);
      console.log("Title:", emergency.features?.title);
      console.log("Items Count:", emergency.features?.items?.length || 0);

      console.log("\n--- SECTION ORDER ---");
      console.log(emergency.sectionOrder);
    } else {
      console.log("Emergency Dentistry document not found!");
    }

    // Check Dental Implants (with new sections)
    console.log("\n\n============================================");
    console.log("=== DENTAL IMPLANTS DATA ===");
    console.log("============================================\n");

    const implants = await StaticServicePage.findOne({
      serviceKey: "dental-implants",
    });

    if (implants) {
      console.log("--- HERO SECTION ---");
      console.log("Title:", implants.hero?.title);
      console.log(
        "Description:",
        implants.hero?.description?.substring(0, 100) + "...",
      );

      console.log("\n--- BENEFITS SECTION ---");
      console.log("Enabled:", implants.benefits?.enabled);
      console.log("Title:", implants.benefits?.title);
      console.log("Items Count:", implants.benefits?.items?.length || 0);

      console.log("\n--- FEATURES SECTION ---");
      console.log("Enabled:", implants.features?.enabled);
      console.log("Title:", implants.features?.title);
      console.log("Items Count:", implants.features?.items?.length || 0);

      console.log("\n--- ALL-ON-FOUR SECTION (NEW) ---");
      console.log("Enabled:", implants.allOnFour?.enabled);
      console.log("Title:", implants.allOnFour?.title);
      console.log(
        "Subtitle:",
        implants.allOnFour?.subtitle?.substring(0, 80) + "...",
      );
      console.log("Items Count:", implants.allOnFour?.items?.length || 0);
      if (implants.allOnFour?.items?.length > 0) {
        implants.allOnFour.items.forEach((item, i) => {
          console.log(`  ${i + 1}. ${item.title}`);
        });
      }

      console.log("\n--- SENIORS SECTION (NEW) ---");
      console.log("Enabled:", implants.seniors?.enabled);
      console.log("Title:", implants.seniors?.title);
      console.log(
        "Subtitle:",
        implants.seniors?.subtitle?.substring(0, 80) + "...",
      );
      console.log("Items Count:", implants.seniors?.items?.length || 0);
      if (implants.seniors?.items?.length > 0) {
        implants.seniors.items.forEach((item, i) => {
          console.log(`  ${i + 1}. ${item.title}`);
        });
      }

      console.log("\n--- SECTION ORDER ---");
      console.log(implants.sectionOrder);
    } else {
      console.log("Dental Implants document not found!");
    }

    // Check Clear Aligners (with new sections)
    console.log("\n\n============================================");
    console.log("=== CLEAR ALIGNERS DATA ===");
    console.log("============================================\n");

    const aligners = await StaticServicePage.findOne({
      serviceKey: "clear-aligners",
    });

    if (aligners) {
      console.log("--- HERO SECTION ---");
      console.log("Title:", aligners.hero?.title);

      console.log("\n--- IMPORTANCE SECTION (NEW) ---");
      console.log("Enabled:", aligners.importance?.enabled);
      console.log("Title:", aligners.importance?.title);
      console.log(
        "Sections Count:",
        aligners.importance?.sections?.length || 0,
      );

      console.log("\n--- OFFERINGS SECTION (NEW) ---");
      console.log("Enabled:", aligners.offerings?.enabled);
      console.log("Title:", aligners.offerings?.title);
      console.log("Items Count:", aligners.offerings?.items?.length || 0);

      console.log("\n--- SUITABILITY SECTION (NEW) ---");
      console.log("Enabled:", aligners.suitability?.enabled);
      console.log("Title:", aligners.suitability?.title);
      console.log(
        "Sections Count:",
        aligners.suitability?.sections?.length || 0,
      );

      console.log("\n--- GET STARTED SECTION (NEW) ---");
      console.log("Enabled:", aligners.getStarted?.enabled);
      console.log("Title:", aligners.getStarted?.title);
      console.log("Steps Count:", aligners.getStarted?.steps?.length || 0);

      console.log("\n--- SECTION ORDER ---");
      console.log(aligners.sectionOrder);
    } else {
      console.log("Clear Aligners document not found!");
    }

    // Summary of all services
    console.log("\n\n============================================");
    console.log("=== ALL SERVICES SUMMARY ===");
    console.log("============================================\n");

    const allServices = await StaticServicePage.find({}).select(
      "serviceKey displayName status sectionOrder",
    );

    console.log(`Total Services: ${allServices.length}\n`);

    allServices.forEach((service) => {
      const sectionCount = service.sectionOrder?.length || 0;
      console.log(
        `${service.displayName.padEnd(35)} | Status: ${service.status.padEnd(10)} | Sections: ${sectionCount}`,
      );
    });

    console.log("\n=== END ===");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("\nDisconnected from MongoDB");
  }
}

checkData();
