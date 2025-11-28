const mongoose = require('mongoose');
const ClearAlignersPage = require('../models/ClearAlignersPage');
require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dental-smile';
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const seed = async () => {
  try {
    await connectDB();

    const sections = [
      {
        id: 'hero',
        name: 'Hero',
        title: 'Invisalign Clear Aligners',
        type: 'hero',
        order: 0,
        content: {
          category: 'ORTHODONTIC TREATMENT',
          title: 'Invisalign Clear Aligners',
          subtitle: 'We offer Invisalign as a discreet and comfortable solution for effective teeth straightening without the visibility of traditional braces. Custom-fitted and removable aligners that fit your lifestyle.',
          primaryButtonText: 'Free Smile Evaluation',
          secondaryButtonText: 'Request an Appointment',
          image: '/assets/service1/placeholder1.png'
        },
        subsections: []
      },
      {
        id: 'idealSmile',
        name: 'Get the Ideal Smile',
        title: 'Get the Ideal Smile',
        type: 'features',
        order: 1,
        content: {
          title: 'Get the Ideal Smile',
          subtitle: 'Stop worrying about your smile. We provide the best clear aligners in Ottawa.',
          cards: [
            { title: 'Compassionate Care', description: "Doctors who hear your needs", icon: '/icons/heart.svg', color: '#6366f1' },
            { title: 'Modern Technology', description: 'Advanced office equipment', icon: '/icons/award.svg', color: '#5FC1D7' },
            { title: 'Flexible Payment', description: 'Affordable payment plans', icon: '/icons/shield.svg', color: '#27A8E0' },
            { title: 'Quick Service', description: 'Reduced wait times', icon: '/icons/zap.svg', color: '#10b981' }
          ]
        }
      },
      {
        id: 'benefits',
        name: 'Benefits of Invisalign',
        title: 'Benefits of Invisalign',
        type: 'content',
        order: 2,
        content: {
          title: 'Benefits of Invisalign',
          subtitle: 'A convenient alternative to traditional braces with invisible aligners',
          points: [
            { title: 'Virtually Invisible', text: 'Clear aligners are virtually unnoticeable, appealing to those who prioritize aesthetics and comfort.' },
            { title: 'Removable Design', text: 'Eat, brush, and floss easily. Aligners are removable, minimizing risks of trapped food and plaque buildup.' },
            { title: 'Advanced Technology', text: 'Designed using 3D computer technology, ensuring each set fits comfortably and guides teeth precisely.' },
            { title: 'Better Oral Hygiene', text: 'Removable aligners support better oral hygiene compared to fixed braces.' }
          ],
          image: '/assets/service1/placeholder3.png'
        }
      },
      {
        id: 'importance',
        name: 'Importance',
        title: 'The Importance of Clear Aligners',
        type: 'content',
        order: 3,
        content: {
          title: 'The Importance of Clear Aligners',
          description: "Having straight teeth isn't just about looking good. It's about your health too. Crooked teeth can cause problems when chewing and even speaking. They can be harder to clean, which might lead to gum disease and cavities.",
          healthBenefits: [
            'Easier to clean teeth',
            'Better chewing function',
            'Improved speech',
            'Reduced gum disease risk',
            'Fewer cavities'
          ],
          lifestyleAdvantages: [
            'Eat your choice of foods',
            'Brush teeth normally',
            'No metal brackets',
            'Comfortable fit',
            'Discreet appearance'
          ]
        }
      },
      {
        id: 'offerings',
        name: 'Offerings',
        title: 'Explore Our Offerings',
        type: 'gallery',
        order: 4,
        content: {
          title: 'Explore Our Offerings',
          subtitle: 'Comprehensive Invisalign services tailored to your needs',
          images: ['/assets/service1/placeholder4.png', '/assets/service1/placeholder5.png']
        }
      },
      {
        id: 'isRight',
        name: 'IsInvisalignRight',
        title: 'Is Invisalign Right for You?',
        type: 'faq',
        order: 5,
        content: {
          title: 'Is Invisalign Right for You?',
          description: 'Invisalign is effective for correcting various mild to moderate alignment issues. Dr. Dhaliwal provides an initial consultation to evaluate your suitability.',
          whatItCanTreat: [
            'Gaps between teeth',
            'Mild crowding',
            'Minor bite discrepancies',
            'Mild to moderate misalignment'
          ],
          commitmentRequired: [
            'Wear aligners 22 hours daily',
            'Change aligners every 2 weeks',
            'Regular check-up appointments',
            'Follow treatment plan consistently'
          ],
          note: 'Certain complex cases may require the expertise of an orthodontic specialist.'
        }
      },
      {
        id: 'howToGetStarted',
        name: 'HowToGetStarted',
        title: 'How to Get Started',
        type: 'steps',
        order: 6,
        content: {
          title: 'How to Get Started',
          subtitle: 'Starting Invisalign treatment with Dr. Dhaliwal is simple and straightforward',
          steps: [
            { number: 1, title: 'Digital Scan', description: 'Advanced imaging to design your custom treatment plan' },
            { number: 2, title: 'Custom Aligners', description: 'Sequence of aligners designed to gradually correct alignment' },
            { number: 3, title: 'Regular Updates', description: "New aligners every two weeks for gradual adjustments" },
            { number: 4, title: 'Progress Monitoring', description: 'Follow-up appointments to ensure treatment stays on track' }
          ]
        }
      },
      {
        id: 'faq',
        name: 'FAQ',
        title: 'Common Questions',
        type: 'faq',
        order: 7,
        content: {
          title: 'Common Questions',
          questions: [
            { question: 'How long does Invisalign treatment take?', answer: 'Treatment typically takes 12-18 months, depending on your specific alignment needs.' },
            { question: 'Are clear aligners painful?', answer: 'You may feel slight pressure when starting new aligners, but it is not painful.' },
            { question: 'Can I eat with aligners in?', answer: 'No, remove aligners when eating or drinking anything other than water.' },
            { question: 'How often do I need check-ups?', answer: 'Typically every 4-6 weeks.' },
            { question: 'Will I need retainers after treatment?', answer: 'Yes, retainers are essential to maintain your new smile.' }
          ]
        }
      },
      {
        id: 'cta',
        name: 'CTA',
        title: 'Start Your Journey Today',
        type: 'cta',
        order: 8,
        content: {
          title: 'Start Your Journey Today',
          subtitle: "Located at 888 Meadowlands Dr, Ottawa, ON. Visit Smile Health and get your free smile assessment.",
          primaryButtonText: 'Free Smile Evaluation',
          secondaryButtonText: 'Contact Us Today'
        }
      }
    ];

    const doc = await ClearAlignersPage.findOneAndUpdate(
      { pageSlug: 'clear-aligners' },
      {
        $set: {
          pageTitle: 'Invisalign Clear Aligners',
          metaDescription: 'Invisalign and clear aligner services',
          status: 'published',
          sections,
          globalStyles: {}
        }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log('Seeded ClearAlignersPage:', doc.pageSlug, 'with', doc.sections.length, 'sections');

  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

seed();
