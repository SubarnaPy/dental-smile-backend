const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('../models/Blog');
const { exampleAdvancedBlog } = require('./exampleAdvancedBlog');

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

// Create or update the advanced blog example
const createAdvancedBlogExample = async () => {
  try {
    console.log('Creating/updating advanced blog example...');

    // Check if a blog with this title already exists
    let existingBlog = await Blog.findOne({ title: exampleAdvancedBlog.title });

    if (existingBlog) {
      console.log('Blog already exists, updating...');
      // Update existing blog
      Object.assign(existingBlog, exampleAdvancedBlog);
      await existingBlog.save();
      console.log('Blog updated successfully:', existingBlog._id);
    } else {
      console.log('Creating new blog...');
      // Create new blog
      const blog = await Blog.create(exampleAdvancedBlog);
      console.log('Blog created successfully:', blog._id);
    }

    console.log('Advanced blog example operation completed');
  } catch (error) {
    console.error('Error creating/updating blog:', error);
  }
};

// Run the script
const runScript = async () => {
  await connectDB();
  await createAdvancedBlogExample();
  process.exit(0);
};

if (require.main === module) {
  runScript();
}

module.exports = { createAdvancedBlogExample };