const { validationResult } = require('express-validator');
const Blog = require('../models/Blog');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Private
const getBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { search, category, status, featured } = req.query;

    // Build filter
    let filter = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (status === 'published') {
      filter.published = true;
    } else if (status === 'draft') {
      filter.published = false;
    }

    // If request is unauthenticated, only return published blogs by default
    if (!req.user && status === undefined) {
      filter.published = true;
    }

    if (featured === 'true') {
      filter.featured = true;
    }

    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('author', 'name');

    const total = await Blog.countDocuments(filter);

    res.json({
      success: true,
      data: {
        blogs,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get single blog
// @route   GET /api/blogs/:id
// @access  Private
const getBlog = async (req, res) => {
  try {
    // increment view count and return updated document
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // If the blog is not published and the request is unauthenticated, hide it
    if (!blog.published && !req.user) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.json({
      success: true,
      data: { blog }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Create blog
// @route   POST /api/blogs
// @access  Private
const createBlog = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const blogData = {
      ...req.body,
      author: req.user.name || req.user.email,
      lastEditedBy: req.user.name || req.user.email
    };

    // If sections are provided, ensure they have IDs and proper order
    if (blogData.sections && blogData.sections.length > 0) {
      blogData.sections = blogData.sections.map((section, index) => ({
        ...section,
        id: section.id || `section-${Date.now()}-${index}`,
        order: section.order !== undefined ? section.order : index
      }));
    }

    const blog = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: { blog }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const updateData = {
      ...req.body,
      lastEditedBy: req.user.name || req.user.email,
      version: undefined // Let MongoDB handle versioning
    };

    // If sections are provided, ensure they have IDs and proper order
    if (updateData.sections && updateData.sections.length > 0) {
      updateData.sections = updateData.sections.map((section, index) => ({
        ...section,
        id: section.id || `section-${Date.now()}-${index}`,
        order: section.order !== undefined ? section.order : index
      }));
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.json({
      success: true,
      message: 'Blog updated successfully',
      data: { blog }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    await blog.deleteOne();

    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get blog categories
// @route   GET /api/blogs/categories
// @access  Private
const getCategories = async (req, res) => {
  try {
    const categories = await Blog.distinct('category');
    res.json({
      success: true,
      data: { categories: categories.filter(cat => cat) }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Publish/Unpublish blog
// @route   PATCH /api/blogs/:id/publish
// @access  Private
const togglePublish = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    blog.published = !blog.published;
    await blog.save();

    res.json({
      success: true,
      message: `Blog ${blog.published ? 'published' : 'unpublished'} successfully`,
      data: { blog }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Preview blog (without incrementing views)
// @route   GET /api/blogs/:id/preview
// @access  Private (admin/editor only)
const previewBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Return blog data without incrementing views
    res.json({
      success: true,
      data: {
        blog,
        isPreview: true
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Save blog draft
// @route   POST /api/blogs/:id/draft
// @access  Private (admin/editor only)
const saveDraft = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Save current state as draft
    const draftData = {
      sections: req.body.sections || blog.sections,
      lastSaved: new Date()
    };

    blog.draft = draftData;
    blog.lastEditedBy = req.user.name || req.user.email;

    await blog.save();

    res.json({
      success: true,
      message: 'Draft saved successfully',
      data: {
        blog,
        draft: draftData
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blogs/slug/:slug
// @access  Public
const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    if (!blog.published && !req.user) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.json({ success: true, data: { blog } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getCategories,
  togglePublish,
  previewBlog,
  saveDraft
};