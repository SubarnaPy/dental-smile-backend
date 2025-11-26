const mongoose = require('mongoose');

// Section schema for advanced blog structure
const sectionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['hero', 'text', 'image', 'gallery', 'quote', 'video', 'divider', 'cta'],
    required: true
  },
  title: {
    type: String,
    trim: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed // Can be string, array of strings, or object
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: String,
    caption: String,
    style: {
      type: String,
      enum: ['background', 'inline', 'gallery', 'hero'],
      default: 'inline'
    },
    position: {
      type: String,
      enum: ['left', 'right', 'center', 'full-width'],
      default: 'center'
    }
  }],
  styles: {
    backgroundColor: String,
    textColor: String,
    backgroundImage: String,
    padding: String,
    margin: String,
    textAlign: {
      type: String,
      enum: ['left', 'center', 'right', 'justify'],
      default: 'left'
    },
    fontSize: String,
    fontWeight: String
  },
  metadata: {
    videoUrl: String,
    buttonText: String,
    buttonLink: String,
    galleryLayout: {
      type: String,
      enum: ['grid', 'masonry', 'carousel', 'single'],
      default: 'grid'
    },
    columns: {
      type: Number,
      min: 1,
      max: 4,
      default: 3
    }
  },
  order: {
    type: Number,
    default: 0
  },
  visible: {
    type: Boolean,
    default: true
  }
}, { _id: false });

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  excerpt: {
    type: String,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  // Legacy content field for backward compatibility
  content: {
    type: mongoose.Schema.Types.Mixed
  },
  // New advanced sections structure
  sections: [sectionSchema],
  richTextContent: {
    type: String
  },
  author: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  // Legacy image fields for backward compatibility
  image: {
    type: String
  },
  heroImage: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  published: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  readTime: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String],
    canonicalUrl: String
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  // Advanced features
  estimatedReadTime: {
    type: Number, // in minutes
    default: 0
  },
  tableOfContents: [{
    title: String,
    sectionId: String,
    level: {
      type: Number,
      min: 1,
      max: 6,
      default: 2
    }
  }],
  relatedBlogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  version: {
    type: Number,
    default: 1
  },
  lastEditedBy: String,
  draft: {
    sections: [sectionSchema],
    lastSaved: Date
  }
}, {
  timestamps: true
});

// Create slug from title before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }

  // Calculate estimated read time
  if (this.isModified('sections') || this.isModified('content')) {
    this.estimatedReadTime = this.calculateReadTime();
  }

  // Generate table of contents
  if (this.isModified('sections')) {
    this.tableOfContents = this.generateTableOfContents();
  }

  next();
});

// Methods
blogSchema.methods.calculateReadTime = function() {
  let totalWords = 0;

  if (this.sections && this.sections.length > 0) {
    this.sections.forEach(section => {
      if (section.type === 'text' && section.content) {
        const words = typeof section.content === 'string'
          ? section.content.split(/\s+/).length
          : 0;
        totalWords += words;
      }
    });
  } else if (this.content) {
    // Fallback for legacy content
    const contentStr = typeof this.content === 'string' ? this.content : '';
    totalWords = contentStr.split(/\s+/).length;
  }

  // Average reading speed: 200 words per minute
  const readTimeMinutes = Math.ceil(totalWords / 200);
  return Math.max(readTimeMinutes, 1); // Minimum 1 minute
};

blogSchema.methods.generateTableOfContents = function() {
  const toc = [];

  if (this.sections && this.sections.length > 0) {
    this.sections.forEach((section, index) => {
      if (section.type === 'text' && section.title) {
        toc.push({
          title: section.title,
          sectionId: section.id,
          level: 2 // Default heading level
        });
      }
    });
  }

  return toc;
};

// Virtual for formatted read time
blogSchema.virtual('readTimeFormatted').get(function() {
  const minutes = this.estimatedReadTime;
  return minutes === 1 ? '1 min read' : `${minutes} min read`;
});

// Ensure virtual fields are serialized
blogSchema.set('toJSON', { virtuals: true });
blogSchema.set('toObject', { virtuals: true });

// Indexes
blogSchema.index({ title: 'text', excerpt: 'text', 'sections.content': 'text' });
blogSchema.index({ category: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ published: 1, featured: -1, createdAt: -1 });
blogSchema.index({ 'seo.keywords': 1 });

module.exports = mongoose.model('Blog', blogSchema);