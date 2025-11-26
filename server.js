require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimit');

// Import routes
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blogs');
const formRoutes = require('./routes/forms');
const servicePageRoutes = require('./routes/servicePages');
const serviceTemplateRoutes = require('./routes/serviceTemplates');
const publicServicesRoutes = require('./routes/publicServices');
const uploadRoutes = require('./routes/uploads');
const adminImportTemplates = require('./routes/adminImportTemplates');

const app = express();

// Connect to database
console.log('Connecting to database...');
connectDB().then(() => {
  console.log('Database connected successfully');
  
  // Security middleware
  console.log('Setting up middleware...');
  app.use(helmet());
  app.use(cors({
    origin: process.env.NODE_ENV === 'production'
      ? ['https://dentalesmails.netlify.app', 'https://dentalesmails-admin.netlify.app']
      : ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:8080','http://localhost:8081'],
    credentials: true
  }));

  // Rate limiting
  app.use('/api/', apiLimiter);
  console.log('Rate limiting set up');

  // Body parsing middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Static files
  app.use('/uploads', express.static('uploads'));

  // Health check
  app.get('/health', (req, res) => {
    res.json({
      success: true,
      message: 'Server is running',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    });
  });

  // API routes
  console.log('Setting up routes...');
  app.use('/api/auth', authRoutes);
  app.use('/api/blogs', blogRoutes);
  app.use('/api/forms', formRoutes);
  app.use('/api/service-pages', servicePageRoutes);
  app.use('/api/services', publicServicesRoutes);
  app.use('/api/service-templates', serviceTemplateRoutes);
  app.use('/api/uploads', uploadRoutes);
  app.use('/api/admin/import-templates', adminImportTemplates);
  console.log('Routes set up');

  // 404 handler
  app.use('*', (req, res) => {
    res.status(404).json({
      success: false,
      message: `Route ${req.originalUrl} not found`
    });
  });

  // Error handling middleware (must be last)
  app.use(errorHandler);
  console.log('Error handler set up');

  const PORT = process.env.PORT || 5000;

  console.log(`Attempting to start server on port ${PORT}...`);
  const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  }).on('error', (err) => {
    console.error('Server failed to start:', err.message);
    process.exit(1);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => {
      process.exit(1);
    });
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Uncaught Exception');
    process.exit(1);
  });

}).catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1);
});

module.exports = app;