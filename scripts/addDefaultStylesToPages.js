const mongoose = require('mongoose');
const ServicePage = require('../models/ServicePage');
require('dotenv').config();

const defaultStyles = {
  hero: {
    padding: '5rem 1rem',
    textAlign: 'center',
    minHeight: '520px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overlay: { color: 'rgba(0,0,0,0.35)', opacity: 0.35 },
    responsive: {
      sm: { padding: '3rem 1rem', minHeight: '360px' },
      md: { padding: '5rem 1rem', minHeight: '480px' },
      lg: { padding: '6rem 2rem', minHeight: '520px' }
    }
  },
  imageText: {
    padding: '4rem 1rem',
    responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } },
    objectFit: 'cover'
  },
  iconGrid: {
    padding: '4rem 1rem',
    responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } }
  },
  text: {
    padding: '2rem 1rem',
    maxWidth: '64rem',
    margin: '0 auto',
    responsive: { sm: { padding: '1rem' }, md: { padding: '2rem 1rem' } }
  },
  image: {
    padding: '2rem 1rem',
    objectFit: 'cover'
  },
  cta: {
    padding: '4rem 1rem',
    textAlign: 'center',
    responsive: { sm: { padding: '2rem 1rem' }, md: { padding: '3rem 1rem' } }
  },
  ctaWithBackground: {
    padding: '5rem 1rem',
    textAlign: 'center',
    minHeight: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    responsive: { sm: { padding: '3rem 1rem' }, md: { padding: '4rem 1rem' } }
  },
  stats: {
    padding: '4rem 1rem',
    responsive: { sm: { padding: '2rem 1rem' } }
  },
  testimonials: {
    padding: '4rem 1rem',
    responsive: { sm: { padding: '2rem 1rem' } }
  },
  faq: {
    padding: '4rem 1rem',
    maxWidth: '64rem',
    margin: '0 auto',
    responsive: { sm: { padding: '2rem 1rem' } }
  },
  pricing: {
    padding: '4rem 1rem',
    responsive: { sm: { padding: '2rem 1rem' } }
  },
  timeline: {
    padding: '4rem 1rem',
    maxWidth: '64rem',
    margin: '0 auto',
    responsive: { sm: { padding: '2rem 1rem' } }
  },
  numberedList: {
    padding: '4rem 1rem',
    responsive: { sm: { padding: '2rem 1rem' } }
  },
  featureDetail: {
    padding: '4rem 1rem',
    responsive: { sm: { padding: '2rem 1rem' } }
  },
};

async function addDefaultStylesToPages() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const pages = await ServicePage.find({});
    console.log(`Found ${pages.length} pages to process`);

    let updatedCount = 0;

    for (const page of pages) {
      let hasChanges = false;

      if (page.content && Array.isArray(page.content)) {
        page.content = page.content.map(component => {
          // If component doesn't have a style property or has empty style
          if (!component.style || Object.keys(component.style).length === 0) {
            hasChanges = true;
            return {
              ...component,
              style: defaultStyles[component.type] || {}
            };
          }
          return component;
        });

        if (hasChanges) {
          await page.save();
          updatedCount++;
          console.log(`✓ Updated page: ${page.title} (${page.slug})`);
        }
      }
    }

    console.log(`\n✓ Migration complete! Updated ${updatedCount} pages.`);
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

addDefaultStylesToPages();
