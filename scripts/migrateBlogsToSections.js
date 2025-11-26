const mongoose = require('mongoose');
const Blog = require('../models/Blog');

// Connect to database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dental-smile');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Migrate existing blogs to new section-based format
const migrateBlogs = async () => {
  try {
    console.log('Starting blog migration...');

    // Find blogs that don't have sections but have content
    const blogsToMigrate = await Blog.find({
      sections: { $exists: false },
      $or: [
        { content: { $exists: true, $ne: null } },
        { image: { $exists: true, $ne: null } },
        { heroImage: { $exists: true, $ne: null } }
      ]
    });

    console.log(`Found ${blogsToMigrate.length} blogs to migrate`);

    for (const blog of blogsToMigrate) {
      const sections = [];

      // Add hero section if heroImage exists
      if (blog.heroImage) {
        sections.push({
          id: `hero-${Date.now()}`,
          type: 'hero',
          title: blog.title,
          images: [{
            url: blog.heroImage,
            alt: blog.title,
            style: 'hero'
          }],
          order: 0,
          visible: true
        });
      }

      // Add text content section
      if (blog.content) {
        sections.push({
          id: `content-${Date.now()}`,
          type: 'text',
          title: blog.subtitle || 'Content',
          content: blog.content,
          order: sections.length,
          visible: true
        });
      }

      // Add image section if regular image exists and not hero
      if (blog.image && blog.image !== blog.heroImage) {
        sections.push({
          id: `image-${Date.now()}`,
          type: 'image',
          images: [{
            url: blog.image,
            alt: blog.title,
            style: 'inline'
          }],
          order: sections.length,
          visible: true
        });
      }

      // Update blog with sections
      await Blog.findByIdAndUpdate(blog._id, {
        sections: sections,
        // Keep legacy fields for backward compatibility
        version: 2
      });

      console.log(`Migrated blog: ${blog.title}`);
    }

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration error:', error);
  }
};

// Run migration
const runMigration = async () => {
  await connectDB();
  await migrateBlogs();
  process.exit(0);
};

if (require.main === module) {
  runMigration();
}

module.exports = { migrateBlogs };