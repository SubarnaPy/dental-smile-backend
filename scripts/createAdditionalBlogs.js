const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('../models/Blog');
const { additionalBlogs } = require('./additionalBlogs');

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

// Create additional blogs
const createAdditionalBlogs = async () => {
  try {
    console.log('Creating additional blogs...');

    for (const blogData of additionalBlogs) {
      // Check if blog already exists
      const existingBlog = await Blog.findOne({ title: blogData.title });

      if (existingBlog) {
        console.log(`Blog "${blogData.title}" already exists, updating...`);
        // Update existing blog
        Object.assign(existingBlog, blogData);
        await existingBlog.save();
        console.log(`Updated blog: ${existingBlog._id}`);
      } else {
        console.log(`Creating new blog: "${blogData.title}"`);
        // Create new blog
        const blog = await Blog.create(blogData);
        console.log(`Created blog: ${blog._id}`);
      }
    }

    console.log('Additional blogs creation/update completed successfully');
  } catch (error) {
    console.error('Error creating/updating blogs:', error);
  }
};

// Run the script
const runScript = async () => {
  await connectDB();
  await createAdditionalBlogs();
  process.exit(0);
};

if (require.main === module) {
  runScript();
}

module.exports = { createAdditionalBlogs };