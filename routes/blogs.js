const express = require('express');
const { body } = require('express-validator');
const { auth, authorize } = require('../middleware/auth');
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getCategories,
  togglePublish,
  getBlogBySlug,
  previewBlog,
  saveDraft
} = require('../controllers/blogController');

const router = express.Router();

// Validation rules
const blogValidation = [
  body('title').trim().isLength({ min: 1, max: 200 }),
  body('excerpt').optional().trim().isLength({ max: 500 }),
  body('subtitle').optional().trim().isLength({ max: 300 }),
  body('content').optional(), // Legacy support
  body('sections').optional().isArray(),
  body('sections.*.id').optional().isString(),
  body('sections.*.type').optional().isIn(['hero', 'text', 'image', 'gallery', 'quote', 'video', 'divider', 'cta']),
  body('sections.*.title').optional().trim().isLength({ max: 200 }),
  body('sections.*.content').optional(),
  body('sections.*.images').optional().isArray(),
  body('sections.*.images.*.url').optional().isURL(),
  body('sections.*.images.*.alt').optional().trim(),
  body('sections.*.images.*.caption').optional().trim(),
  body('sections.*.images.*.style').optional().isIn(['background', 'inline', 'gallery', 'hero']),
  body('sections.*.images.*.position').optional().isIn(['left', 'right', 'center', 'full-width']),
  body('sections.*.styles').optional().isObject(),
  body('sections.*.metadata').optional().isObject(),
  body('sections.*.order').optional().isNumeric(),
  body('sections.*.visible').optional().isBoolean(),
  body('category').optional().trim(),
  body('tags').optional().isArray(),
  body('image').optional().isURL(), // Legacy support
  body('heroImage').optional().isURL(), // Legacy support
  body('featured').optional().isBoolean(),
  body('published').optional().isBoolean(),
  body('seo').optional().isObject(),
  body('seo.metaTitle').optional().trim().isLength({ max: 60 }),
  body('seo.metaDescription').optional().trim().isLength({ max: 160 }),
  body('seo.keywords').optional().isArray(),
  body('seo.canonicalUrl').optional().isURL(),
  body('relatedBlogs').optional().isArray()
];

// Public routes (list and single view) - do not require authentication
router.get('/', getBlogs);
router.get('/categories', getCategories);
router.get('/slug/:slug', getBlogBySlug);
router.get('/:id', getBlog);
router.get('/:id/preview', auth, authorize('admin', 'editor'), previewBlog);

// Protected routes - require authentication and proper authorization
router.post('/', auth, blogValidation, authorize('admin', 'editor'), createBlog);
router.put('/:id', auth, blogValidation, authorize('admin', 'editor'), updateBlog);
router.patch('/:id/publish', auth, authorize('admin', 'editor'), togglePublish);
router.post('/:id/draft', auth, blogValidation, authorize('admin', 'editor'), saveDraft);
router.delete('/:id', auth, authorize('admin'), deleteBlog);

module.exports = router;