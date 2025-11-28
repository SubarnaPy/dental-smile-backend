const mongoose = require('mongoose');
const DentalVeneersPage = require('../models/DentalVeneersPage');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    // Use the same env var as the server (`MONGO_URI`) if available for consistency
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dental-smile';
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Test function
const testData = async () => {
  try {
    await connectDB();

    // Get the page data
    const pageData = await DentalVeneersPage.findOne({ status: 'published' });

    if (!pageData) {
      console.log('No published dental veneers page found');
      return;
    }

    console.log('Page Title:', pageData.pageTitle);
    console.log('Page Slug:', pageData.pageSlug);
    console.log('Number of sections:', pageData.sections.length);

    // Show section details
    pageData.sections.forEach((section, index) => {
      console.log(`\nSection ${index + 1}:`);
      console.log(`  ID: ${section.id}`);
      console.log(`  Name: ${section.name}`);
      console.log(`  Type: ${section.type}`);
      console.log(`  Enabled: ${section.enabled}`);
      console.log(`  Order: ${section.order}`);
      console.log(`  Content:`, JSON.stringify(section.content, null, 2));
      console.log(`  Subsections: ${section.subsections.length}`);
      
      if (section.subsections.length > 0) {
        section.subsections.forEach((sub, subIndex) => {
          console.log(`    Subsection ${subIndex + 1}:`);
          console.log(`      ID: ${sub.id}`);
          console.log(`      Title: ${sub.title}`);
          console.log(`      Enabled: ${sub.enabled}`);
          console.log(`      Order: ${sub.order}`);
          console.log(`      Content:`, JSON.stringify(sub.content, null, 2));
        });
      }
    });

    // Test the getEnabledSections method
    const enabledSections = pageData.getEnabledSections();
    console.log(`\nEnabled sections: ${enabledSections.length}`);

    console.log('\nTest completed successfully!');

  } catch (error) {
    console.error('Error testing data:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

// Run the test
testData();