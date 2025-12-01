const mongoose = require('mongoose');
const ServiceTemplate = require('../models/ServiceTemplate');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Improved styles with reduced gaps
const improvedStyles = {
  hero: {
    padding: '4rem 1.5rem',
    textAlign: 'center',
    minHeight: '480px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overlay: { color: 'rgba(15,23,42,0.45)', opacity: 0.45 }
  },
  imageText: { padding: '3rem 1.5rem', objectFit: 'cover', gap: '2rem' },
  iconGrid: { padding: '3rem 1.5rem', gap: '1.5rem' },
  numberedList: { padding: '3rem 1.5rem', gap: '1.5rem' },
  timeline: { padding: '3rem 1.5rem', gap: '1.5rem' },
  cta: { padding: '3rem 1.5rem', textAlign: 'center' },
  ctaWithBackground: { padding: '4rem 1.5rem', textAlign: 'center', minHeight: '320px' },
  stats: { padding: '3rem 1.5rem', gap: '1.5rem' },
  testimonials: { padding: '3rem 1.5rem', gap: '1.5rem' },
  faq: { padding: '3rem 1.5rem', gap: '1rem' },
  pricing: { padding: '3rem 1.5rem', gap: '1.5rem' },
  featureDetail: { padding: '3rem 1.5rem', gap: '2rem' },
  text: { padding: '2rem 1.5rem' },
  image: { padding: '2rem 1.5rem' }
};

// Function to enhance component styles
const enhanceComponentStyle = (component) => {
  const type = component.type;
  const baseStyle = improvedStyles[type] || {};
  
  // Merge with existing style, preferring improved values
  return {
    ...component,
    style: {
      ...baseStyle,
      ...(component.style || {})
    }
  };
};

// Function to enhance icon colors (remove rich colors, use slate tones)
const enhanceIconColor = (color) => {
  // Map rich colors to slate tones
  const colorMap = {
    'text-primary': 'text-slate-600',
    'text-accent': 'text-slate-600',
    'text-success': 'text-slate-600',
    'text-info': 'text-slate-600',
    'text-warning': 'text-slate-600',
    'text-danger': 'text-slate-600',
    'text-error': 'text-slate-600',
    'bg-primary': 'bg-slate-600',
    'bg-accent': 'bg-slate-600',
    'bg-success': 'bg-slate-600',
    'bg-info': 'bg-slate-600',
    'bg-warning': 'bg-slate-600'
  };
  
  return colorMap[color] || color;
};

// Function to enhance component data
const enhanceComponentData = (component) => {
  const data = { ...component.data };
  
  // Enhance icon colors in items
  if (data.items && Array.isArray(data.items)) {
    data.items = data.items.map(item => ({
      ...item,
      iconColor: item.iconColor ? enhanceIconColor(item.iconColor) : 'text-slate-600'
    }));
  }
  
  // Enhance stats items
  if (data.items && component.type === 'stats') {
    data.items = data.items.map(item => ({
      ...item,
      iconColor: 'text-slate-700'
    }));
  }
  
  return { ...component, data };
};

// Main enhancement function
const enhanceTemplates = async () => {
  try {
    await connectDB();
    
    console.log('Starting template enhancement...');
    
    const templates = await ServiceTemplate.find({});
    console.log(`Found ${templates.length} templates to enhance`);
    
    let enhanced = 0;
    
    for (const template of templates) {
      if (template.content && Array.isArray(template.content)) {
        // Enhance each component
        const enhancedContent = template.content.map(component => {
          let enhanced = enhanceComponentStyle(component);
          enhanced = enhanceComponentData(enhanced);
          return enhanced;
        });
        
        // Update template
        await ServiceTemplate.findByIdAndUpdate(template._id, {
          content: enhancedContent,
          updatedAt: new Date()
        });
        
        enhanced++;
        console.log(`Enhanced: ${template.name}`);
      }
    }
    
    console.log('\n========================================');
    console.log('Template enhancement complete!');
    console.log(`Templates enhanced: ${enhanced}`);
    console.log('========================================\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error enhancing templates:', error);
    process.exit(1);
  }
};

// Run the enhancement
enhanceTemplates();
