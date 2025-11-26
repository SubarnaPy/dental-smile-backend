const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('../models/Blog');

// Load environment variables
dotenv.config();

// Connect to database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dental-smile');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Verify the advanced blog
const verifyAdvancedBlog = async () => {
  try {
    console.log('Verifying advanced blog in database...');

    const blog = await Blog.findOne({ title: "Complete Guide to Dental Implants" });

    if (!blog) {
      console.log('Blog not found!');
      return;
    }

    console.log('Blog found:', {
      id: blog._id,
      title: blog.title,
      sectionsCount: blog.sections ? blog.sections.length : 0,
      published: blog.published,
      featured: blog.featured,
      hasTableOfContents: blog.tableOfContents ? blog.tableOfContents.length : 0,
      estimatedReadTime: blog.estimatedReadTime,
      version: blog.version
    });

    if (blog.sections && blog.sections.length > 0) {
      console.log('\nSections:');
      blog.sections.forEach((section, index) => {
        console.log(`${index + 1}. ${section.type}: ${section.title || 'No title'} (${section.visible ? 'visible' : 'hidden'})`);
      });
    }

    console.log('\nBlog verification completed successfully!');
  } catch (error) {
    console.error('Error verifying blog:', error);
  }
};

// Run verification
const runVerification = async () => {
  await connectDB();
  await verifyAdvancedBlog();
  process.exit(0);
};

if (require.main === module) {
  runVerification();
}

module.exports = { verifyAdvancedBlog };