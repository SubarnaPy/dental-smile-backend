# Admin Backend API

A comprehensive Node.js backend API for the dental clinic admin panel, built with Express.js and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Advanced Blog Management**: Multi-section blogs with rich content types, image galleries, and preview mode
- **Form Management**: Handle patient inquiry forms
- **Service Page Builder**: Dynamic page creation with templates
- **Template System**: Reusable page components and layouts
- **Rate Limiting**: Protection against abuse
- **Security**: Helmet, CORS, input validation
- **Migration**: Automated data migration from Supabase to MongoDB

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator
- **Security**: Helmet, CORS, bcryptjs
- **File Upload**: Multer (for future image uploads)
- **Migration**: Supabase client for data migration

## Project Structure

```
admin-backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── blogController.js    # Blog CRUD operations
│   └── ...                  # Other controllers
├── middleware/
│   ├── auth.js             # JWT authentication & authorization
│   ├── errorHandler.js     # Global error handling
│   └── rateLimit.js        # Rate limiting
├── models/
│   ├── User.js             # User schema
│   ├── Blog.js             # Blog schema
│   ├── Form.js             # Form schema
│   ├── ServicePage.js      # Service page schema
│   └── ServiceTemplate.js  # Template schema
├── routes/
│   ├── auth.js             # Auth routes
│   ├── blogs.js            # Blog routes
│   ├── forms.js            # Form routes
│   ├── servicePages.js     # Service page routes
│   └── serviceTemplates.js # Template routes
├── scripts/
│   └── migrateFromSupabase.js # Data migration script
├── utils/                  # Utility functions
├── tests/                  # Test files
├── uploads/               # File uploads directory
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── server.js              # Main application file
└── README.md              # This file
```

## Advanced Blog Features

The blog system now supports advanced multi-section content creation with rich media support:

### Blog Sections
Each blog can contain multiple sections with different content types:

- **Hero Section**: Large banner with background image and title overlay
- **Text Section**: Rich text content with customizable styling
- **Image Section**: Single images with captions and positioning options
- **Gallery Section**: Image galleries with grid, masonry, or carousel layouts
- **Quote Section**: Highlighted quotes or testimonials
- **Video Section**: Embedded videos with custom thumbnails
- **CTA Section**: Call-to-action buttons with links
- **Divider Section**: Visual separators

### Section Features
- **Images**: Support for background images, inline images, galleries, and hero images
- **Styling**: Custom CSS properties (colors, fonts, spacing, alignment)
- **Metadata**: Additional configuration (video URLs, button links, gallery layouts)
- **Ordering**: Drag-and-drop reordering of sections
- **Visibility**: Show/hide sections as needed

### Advanced Features
- **Auto-generated Table of Contents**: Based on section headings
- **Estimated Read Time**: Calculated from content length
- **Draft Saving**: Auto-save drafts without publishing
- **Preview Mode**: View blogs before publishing (doesn't increment view count)
- **SEO Optimization**: Meta titles, descriptions, and keywords
- **Version Control**: Track changes and edits
- **Related Blogs**: Link to similar content

### API Endpoints

#### Blog Management
```
GET    /api/blogs              # List blogs (public)
GET    /api/blogs/:id          # Get single blog (public)
GET    /api/blogs/slug/:slug   # Get blog by slug (public)
POST   /api/blogs              # Create blog (admin/editor)
PUT    /api/blogs/:id          # Update blog (admin/editor)
DELETE /api/blogs/:id          # Delete blog (admin)
PATCH  /api/blogs/:id/publish  # Toggle publish status (admin/editor)
```

#### Advanced Features
```
GET    /api/blogs/:id/preview  # Preview blog (admin/editor)
POST   /api/blogs/:id/draft    # Save draft (admin/editor)
GET    /api/blogs/categories   # Get blog categories (public)
```

### Migration
Existing blogs are automatically migrated to the new section-based format using:
```bash
npm run migrate:blogs
```

### Examples & Testing
Create and verify advanced blog examples:
```bash
# Create/update the advanced blog example in database
npm run create:advanced-blog

# Create additional blog examples (3 more blogs)
npm run create:additional-blogs

# Verify the advanced blog was created correctly
npm run verify:advanced-blog

# Verify all blogs in the database
npm run verify:all-blogs
```

### Current Blog Database Status
The database currently contains **4 advanced blogs** with rich content:
- **Complete Guide to Dental Implants** (8 sections, featured, draft)
- **Teeth Whitening Guide** (5 sections, published)
- **Dental Emergency Care** (6 sections, published, featured)
- **Children's Dentistry** (7 sections, published)

Total: **26 sections** across all blogs with multimedia content including galleries, videos, quotes, and call-to-action sections.

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admin-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy `.env` file and update the values:
   ```bash
   cp .env.example .env
   ```

   Update the following variables in `.env`:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   JWT_SECRET=your_super_secret_jwt_key
   PORT=5000
   NODE_ENV=development

   # For migration
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start MongoDB**
   Make sure MongoDB is running locally or update MONGO_URI for cloud MongoDB.

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Migration from Supabase
```bash
npm run migrate
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/change-password` - Change password

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get single blog
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog
- `PATCH /api/blogs/:id/publish` - Toggle publish status
- `GET /api/blogs/categories` - Get blog categories

### Forms
- `GET /api/forms` - Get all forms
- `GET /api/forms/:id` - Get single form
- `PATCH /api/forms/:id/status` - Update form status
- `PATCH /api/forms/:id/assign` - Assign form to user
- `DELETE /api/forms/:id` - Delete form

### Service Pages
- `GET /api/service-pages` - Get all service pages
- `GET /api/service-pages/:id` - Get single service page
- `GET /api/service-pages/slug/:slug` - Get page by slug
- `POST /api/service-pages` - Create service page
- `PUT /api/service-pages/:id` - Update service page
- `PATCH /api/service-pages/:id/publish` - Toggle publish status
- `DELETE /api/service-pages/:id` - Delete service page
- `GET /api/service-pages/categories` - Get page categories

### Service Templates
- `GET /api/service-templates` - Get all templates
- `GET /api/service-templates/:id` - Get single template
- `POST /api/service-templates` - Create template
- `PUT /api/service-templates/:id` - Update template
- `PATCH /api/service-templates/:id/use` - Increment usage count
- `DELETE /api/service-templates/:id` - Delete template
- `GET /api/service-templates/categories` - Get template categories

## Data Migration

The migration script (`scripts/migrateFromSupabase.js`) transfers data from Supabase to MongoDB:

1. **Admin Profiles** → **Users**
2. **Blogs** → **Blogs**
3. **Forms** → **Forms**
4. **Service Pages** → **Service Pages**
5. **Service Templates** → **Service Templates**

### Running Migration

1. Update `.env` with Supabase credentials
2. Run the migration script:
   ```bash
   npm run migrate
   ```

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Rate Limiting**: Protection against brute force attacks
- **Input Validation**: express-validator for data sanitization
- **CORS**: Configured for allowed origins
- **Helmet**: Security headers
- **Role-based Access**: Admin, Editor, Viewer roles

## User Roles

- **Admin**: Full access to all features
- **Editor**: Can create/edit content, manage forms
- **Viewer**: Read-only access

## Error Handling

The API uses consistent error response format:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (development only)"
}
```

## Testing

```bash
npm test
```

## Deployment

1. Set `NODE_ENV=production` in environment
2. Update MongoDB URI for production database
3. Configure CORS origins for production domain
4. Set up proper JWT secret
5. Use process manager like PM2 for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test
4. Submit a pull request

## License

MIT License#   d e n t a l - s m i l e - b a c k e n d  
 