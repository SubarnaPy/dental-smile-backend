const mongoose = require('mongoose');
const ServiceTemplate = require('../models/ServiceTemplate');
require('dotenv').config();

// Import templates from frontend
const pageTemplates = require('./frontendTemplates.json');

// Default styles for components
const defaultStyles = {
  hero: { padding: '5rem 1rem', textAlign: 'center', minHeight: '520px', backgroundSize: 'cover', backgroundPosition: 'center', overlay: { color: 'rgba(0,0,0,0.35)', opacity: 0.35 }, responsive: { sm: { padding: '3rem 1rem', minHeight: '360px' }, md: { padding: '5rem 1rem', minHeight: '480px' }, lg: { padding: '6rem 2rem', minHeight: '520px' } } },
  imageText: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } }, objectFit: 'cover' },
  iconGrid: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } } },
  text: { padding: '2rem 1rem', maxWidth: '64rem', margin: '0 auto', responsive: { sm: { padding: '1rem' }, md: { padding: '2rem 1rem' } } },
  image: { padding: '2rem 1rem', objectFit: 'cover' },
  cta: { padding: '4rem 1rem', textAlign: 'center', responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } } },
  ctaWithBackground: { padding: '5rem 1rem', textAlign: 'center', minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center', responsive: { sm: { padding: '3rem 1rem' }, md: { padding: '4rem 1rem' } } },
  stats: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  testimonials: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  faq: { padding: '4rem 1rem', maxWidth: '64rem', margin: '0 auto', responsive: { sm: { padding: '2rem 1rem' } } },
  pricing: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  timeline: { padding: '4rem 1rem', maxWidth: '64rem', margin: '0 auto', responsive: { sm: { padding: '2rem 1rem' } } },
  numberedList: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
  featureDetail: { padding: '4rem 1rem', responsive: { sm: { padding: '2rem 1rem' } } },
};

// Ensure all components have styles
const ensureComponentStyles = (components) => {
  return components.map(component => ({
    ...component,
    style: component.style && Object.keys(component.style).length > 0 
      ? component.style 
      : (defaultStyles[component.type] || {})
  }));
};

async function syncTemplates() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB\n');

    // Get admin user
    const User = require('../models/User');
    const adminUser = await User.findOne({ role: 'admin' });
    
    if (!adminUser) {
      console.error('❌ No admin user found. Please create an admin user first.');
      process.exit(1);
    }

    console.log(`📦 Syncing ${pageTemplates.length} templates...\n`);

    let created = 0;
    let updated = 0;
    let skipped = 0;

    for (const template of pageTemplates) {
      try {
        // Check if template exists
        const existing = await ServiceTemplate.findOne({ name: template.name });

        // Ensure components have styles
        const componentsWithStyles = ensureComponentStyles(template.components);

        const templateData = {
          name: template.name,
          description: template.description,
          category: template.category,
          content: componentsWithStyles,
          pageStyle: {},
          isActive: true,
          isPremium: false,
          tags: [template.category.toLowerCase()],
          createdBy: adminUser._id
        };

        if (existing) {
          // Update existing template
          await ServiceTemplate.findByIdAndUpdate(existing._id, templateData);
          updated++;
          console.log(`🔄 Updated: ${template.name}`);
        } else {
          // Create new template
          await ServiceTemplate.create(templateData);
          created++;
          console.log(`✨ Created: ${template.name}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${template.name}:`, error.message);
        skipped++;
      }
    }

    console.log(`\n📊 Sync Complete!`);
    console.log(`   ✨ Created: ${created}`);
    console.log(`   🔄 Updated: ${updated}`);
    console.log(`   ⏭️  Skipped: ${skipped}`);
    console.log(`   📦 Total: ${pageTemplates.length}\n`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Sync failed:', error);
    process.exit(1);
  }
}

syncTemplates();
