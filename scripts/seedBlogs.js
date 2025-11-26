require('dotenv').config();
const connectDB = require('../config/database');
const Blog = require('../models/Blog');
const { additionalBlogs } = require('./additionalBlogs');

const sampleBlogs = additionalBlogs;

async function seed() {
  await connectDB();
  try {
    console.log('Clearing existing seeded blogs with matching titles...');
    for (const b of sampleBlogs) {
      await Blog.deleteMany({ title: b.title });
    }

    console.log('Inserting sample blogs...');
    for (const b of sampleBlogs) {
      const blog = new Blog(b);
      await blog.save();
      console.log('Inserted:', blog.title);
    }

    console.log('Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed();
