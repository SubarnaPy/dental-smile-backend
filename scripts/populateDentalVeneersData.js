const mongoose = require('mongoose');
const DentalVeneersPage = require('../models/DentalVeneersPage');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    // Use the same env var as the server (`MONGO_URI`) if available for consistency
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dental-smile';
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Dental Veneers Page Data
const dentalVeneersData = {
  pageTitle: 'Dental Veneers',
  pageSlug: 'dental-veneers',
  metaDescription: 'Professional dental veneers services in Ottawa',
  status: 'published',
  sections: [
    {
      id: 'hero_section',
      name: 'Hero Section',
      title: 'Hero Section',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        badge: 'COSMETIC DENTISTRY',
        title: 'Dental Veneers',
        description: 'Dr. Avneet Dhaliwal offers custom-designed dental veneers to enhance your smile\'s appearance. Address discoloration, minor misalignments, or gaps with durable, natural-looking veneers.',
        primaryButton: {
          text: 'Request an Appointment',
          style: 'teal'
        },
        secondaryButton: {
          text: 'Learn More',
          style: 'blue-outline'
        },
        image: '/images/dental-veneers-hero.jpg',
        imageAlt: 'Dental Veneers'
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'veneers_in_ottawa_section',
      name: 'Dental Veneers in Ottawa',
      title: 'Dental Veneers in Ottawa',
      type: 'features',
      enabled: true,
      order: 1,
      content: {
        subtitle: 'Transform your smile with meticulously crafted veneers that fit seamlessly',
        features: [
          {
            icon: 'Sparkles',
            iconColor: 'pink',
            title: 'Natural-Looking',
            description: 'Made from durable materials that offer a natural-looking improvement'
          },
          {
            icon: 'Award',
            iconColor: 'blue',
            title: 'Custom-Designed',
            description: 'Meticulously crafted to fit seamlessly with the rest of your smile'
          },
          {
            icon: 'Shield',
            iconColor: 'orange',
            title: 'Functional Solution',
            description: 'Provides both functional and visually pleasing results'
          }
        ]
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'types_of_veneers_section',
      name: 'Types of Veneers',
      title: 'Types of Veneers',
      type: 'content',
      enabled: true,
      order: 2,
      content: {
        subtitle: 'Personalized options to suit your needs and budget',
        images: {
          treatment: '/images/veneers-treatment.jpg',
          application: '/images/veneers-application.jpg'
        }
      },
      subsections: [
        {
          id: 'composite_veneers',
          title: 'Composite Veneers',
          content: {
            icon: 'Heart',
            iconColor: 'pink',
            description: 'An economical option providing aesthetic benefits with less enamel removal',
            features: [
              'More affordable',
              'Conservative choice',
              'Less tooth preparation',
              'Quick application',
              'Easily repaired'
            ]
          },
          enabled: true,
          order: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'porcelain_veneers',
          title: 'Porcelain Veneers',
          content: {
            icon: 'Award',
            iconColor: 'blue',
            description: 'Known for durability and natural appearance, ideal for long-lasting enhancement',
            features: [
              'Highly durable',
              'Natural appearance',
              'Stain resistant',
              'Long-lasting',
              'Premium quality'
            ]
          },
          enabled: true,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'lumineers',
          title: 'Lumineers',
          content: {
            icon: 'Sparkles',
            iconColor: 'orange',
            description: 'Ultra-thin veneers requiring minimal to no natural tooth preparation',
            features: [
              'Minimally invasive',
              'Ultra-thin design',
              'No tooth removal',
              'Reversible option',
              'Quick procedure'
            ]
          },
          enabled: true,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'benefits_section',
      name: 'Benefits of Veneers',
      title: 'Benefits of Veneers',
      type: 'content',
      enabled: true,
      order: 3,
      content: {
        subtitle: 'Achieving an enhanced smile with long-term results'
      },
      subsections: [
        {
          id: 'what_veneers_can_fix',
          title: 'What Veneers Can Fix',
          content: {
            items: [
              'Discoloration and staining',
              'Minor misalignments',
              'Gaps between teeth',
              'Chipped or cracked teeth',
              'Uneven tooth shape',
              'Worn-down teeth'
            ]
          },
          enabled: true,
          order: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'key_advantages',
          title: 'Key Advantages',
          content: {
            items: [
              'Durable and stain-resistant',
              'Natural appearance',
              'Custom-made to blend perfectly',
              'Preserves beauty over time',
              'Smooth, natural finish',
              'Boosts confidence'
            ]
          },
          enabled: true,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'veneer_process_section',
      name: 'The Veneer Process',
      title: 'The Veneer Process',
      type: 'process',
      enabled: true,
      order: 4,
      content: {
        subtitle: 'Comprehensive consultation ensuring custom-made veneers',
        steps: [
          {
            number: '1',
            numberColor: 'pink',
            title: 'Consultation',
            description: 'Comprehensive evaluation to determine best veneer type for your needs'
          },
          {
            number: '2',
            numberColor: 'blue',
            title: 'Preparation',
            description: 'Tooth shaping and impressions taken for custom veneer creation'
          },
          {
            number: '3',
            numberColor: 'orange',
            title: 'Fabrication',
            description: 'Custom veneers crafted to blend perfectly with natural teeth'
          },
          {
            number: '4',
            numberColor: 'green',
            title: 'Bonding',
            description: 'Veneers bonded and polished for smooth, natural finish'
          }
        ]
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'results_section',
      name: 'Long-Lasting Results',
      title: 'Long-Lasting Aesthetics & Functionality',
      type: 'content',
      enabled: true,
      order: 5,
      content: {
        image: '/images/veneers-results.jpg',
        benefits: [
          {
            title: 'Confidence Boost',
            description: 'Patients with veneers experience a boost in confidence and improved self-esteem',
            borderColor: 'pink'
          },
          {
            title: 'Unaffected Function',
            description: 'Dental function such as biting and chewing remains completely unaffected',
            borderColor: 'blue'
          },
          {
            title: 'Lasting Results',
            description: 'With proper care and routine dental visits, veneers can last many years',
            borderColor: 'orange'
          }
        ],
        patientImage: '/images/happy-patient.jpg'
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'care_section',
      name: 'Care & Maintenance',
      title: 'Caring for Your Veneers',
      type: 'content',
      enabled: true,
      order: 6,
      content: {
        description: 'Dr. Dhaliwal focuses on delivering veneers that meet the highest standards of aesthetics and functionality. Proper care ensures your veneers remain beautiful for years.',
        dailyCare: {
          title: 'Daily Care',
          items: [
            'Brush twice daily with non-abrasive toothpaste',
            'Floss daily around veneers',
            'Use soft-bristled toothbrush',
            'Avoid biting hard objects'
          ]
        },
        regularVisits: {
          title: 'Regular Visits',
          items: [
            'Routine dental check-ups every 6 months',
            'Professional cleanings',
            'Monitor veneer condition',
            'Address any concerns promptly'
          ]
        }
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'faq_section',
      name: 'FAQ',
      title: 'Common Questions',
      type: 'faq',
      enabled: true,
      order: 7,
      content: {
        questions: [
          {
            question: 'How long do veneers last?',
            answer: 'Porcelain veneers typically last 10-15 years with proper care. Composite veneers last 5-7 years. Regular dental visits help maximize their lifespan.'
          },
          {
            question: 'Are veneers reversible?',
            answer: 'Traditional veneers require enamel removal and are not reversible. However, Lumineers are minimally invasive and can be reversible in some cases.'
          },
          {
            question: 'Do veneers stain?',
            answer: 'Porcelain veneers are highly stain-resistant. Composite veneers may stain over time but can be polished during regular dental visits.'
          },
          {
            question: 'Will veneers look natural?',
            answer: 'Yes, Dr. Dhaliwal custom-designs each veneer to blend perfectly with your natural teeth, ensuring a seamless and natural appearance.'
          },
          {
            question: 'Can I get veneers on just a few teeth?',
            answer: 'Absolutely. Whether you want a subtle enhancement or complete transformation, veneers can be placed on one tooth or multiple teeth.'
          }
        ]
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'cta_section',
      name: 'CTA Section',
      title: 'CTA Section',
      type: 'cta',
      enabled: true,
      order: 8,
      content: {
        title: 'Explore Veneer Options in Nepean',
        subtitle: 'Located at 888 Meadowlands Dr, Ottawa, ON. Smile Health Dental provides a range of veneer options to help you achieve the smile you\'ve always wanted. Dr. Dhaliwal and her team are dedicated to providing tailored solutions.',
        primaryButton: {
          text: 'Request an Appointment',
          style: 'teal'
        },
        secondaryButton: {
          text: 'Contact Us Today',
          style: 'white-outline'
        }
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  globalStyles: {}
};

// Main function
const populateDatabase = async () => {
  try {
    await connectDB();

    // Check if data already exists
    const existingPage = await DentalVeneersPage.findOne();
    if (existingPage) {
      console.log('Dental Veneers page data already exists. Updating...');
      await DentalVeneersPage.findOneAndUpdate({}, dentalVeneersData, { upsert: true, new: true });
      console.log('Dental Veneers page data updated successfully!');
    } else {
      console.log('Creating new Dental Veneers page data...');
      const newPage = new DentalVeneersPage(dentalVeneersData);
      await newPage.save();
      console.log('Dental Veneers page data created successfully!');
    }

    console.log('Database population completed successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

// Run the script
populateDatabase();