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

// Verify all blogs in database
const verifyAllBlogs = async () => {
  try {
    console.log('Verifying all blogs in database...\n');

    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    console.log(`Found ${blogs.length} blogs:\n`);

    blogs.forEach((blog, index) => {
      console.log(`${index + 1}. ${blog.title}`);
      console.log(`   ID: ${blog._id}`);
      console.log(`   Category: ${blog.category}`);
      console.log(`   Sections: ${blog.sections ? blog.sections.length : 0}`);
      console.log(`   Published: ${blog.published}`);
      console.log(`   Featured: ${blog.featured}`);
      console.log(`   Read Time: ${blog.estimatedReadTime} min`);
      console.log(`   Created: ${blog.createdAt.toLocaleDateString()}`);
      console.log('');
    });

    // Summary statistics
    const published = blogs.filter(b => b.published).length;
    const featured = blogs.filter(b => b.featured).length;
    const totalSections = blogs.reduce((sum, b) => sum + (b.sections ? b.sections.length : 0), 0);

    console.log('=== SUMMARY ===');
    console.log(`Total Blogs: ${blogs.length}`);
    console.log(`Published: ${published}`);
    console.log(`Featured: ${featured}`);
    console.log(`Total Sections: ${totalSections}`);
    console.log(`Average Sections per Blog: ${(totalSections / blogs.length).toFixed(1)}`);

    console.log('\nBlog verification completed successfully!');
  } catch (error) {
    console.error('Error verifying blogs:', error);
  }
};

// Run verification
const runVerification = async () => {
  await connectDB();
  await verifyAllBlogs();
  process.exit(0);
};

if (require.main === module) {
  runVerification();
}

module.exports = { verifyAllBlogs };