const mongoose = require('mongoose');
const ClearAlignersPage = require('../models/ClearAlignersPage');
require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dental-smile';
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const testData = async () => {
  try {
    await connectDB();

    const pageData = await ClearAlignersPage.findOne({ status: 'published' });
    if (!pageData) {
      console.log('No published clear aligners page found');
      return;
    }

    console.log('Page Title:', pageData.pageTitle);
    console.log('Page Slug:', pageData.pageSlug);
    console.log('Number of sections:', pageData.sections.length);

    pageData.sections.forEach((section, idx) => {
      console.log(`\nSection ${idx + 1}: id=${section.id}, type=${section.type}, title=${section.title}, enabled=${section.enabled}, subsections=${section.subsections.length}`);
    });

    const enabled = pageData.getEnabledSections();
    console.log('\nEnabled sections count:', enabled.length);
  } catch (err) {
    console.error('Error testing clear aligners data:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

testData();
