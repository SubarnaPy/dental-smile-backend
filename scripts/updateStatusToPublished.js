/**
 * Quick script to update all StaticServicePage documents to published status
 * Usage: node scripts/updateStatusToPublished.js
 */

const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const StaticServicePage = require("../models/StaticServicePage");

// MongoDB connection
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/dental-smile";

async function updateAllToPublished() {
  try {
    console.log("Connecting to MongoDB...");
    console.log("URI:", MONGODB_URI ? "Found" : "Not found");

    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully!\n");

    // Count current documents
    const totalCount = await StaticServicePage.countDocuments();
    console.log(`Total documents in collection: ${totalCount}`);

    const draftCount = await StaticServicePage.countDocuments({ status: "draft" });
    console.log(`Documents with status 'draft': ${draftCount}`);

    const publishedCount = await StaticServicePage.countDocuments({ status: "published" });
    console.log(`Documents with status 'published': ${publishedCount}\n`);

    // Update all documents to published
    console.log("Updating all documents to status: 'published'...");

    const result = await StaticServicePage.updateMany(
      {},
      { $set: { status: "published" } }
    );

    console.log(`\n✅ Updated ${result.modifiedCount} documents`);
    console.log(`   Matched: ${result.matchedCount}`);

    // Verify the update
    const newPublishedCount = await StaticServicePage.countDocuments({ status: "published" });
    console.log(`\nVerification: ${newPublishedCount} documents now have status 'published'`);

    // List all services
    console.log("\n========================================");
    console.log("ALL SERVICES:");
    console.log("========================================");

    const services = await StaticServicePage.find({})
      .select("serviceKey displayName status category")
      .sort({ displayName: 1 });

    services.forEach((s, i) => {
      console.log(`${i + 1}. ${s.displayName} [${s.category}] - ${s.status}`);
    });

    console.log("\n✅ Update complete!");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("\nDisconnected from MongoDB");
  }
}

updateAllToPublished();
