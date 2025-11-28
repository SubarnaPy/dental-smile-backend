const { validationResult } = require('express-validator');
const FamilyDentistryPage = require('../models/FamilyDentistryPage');

// @desc    Get family dentistry page
// @route   GET /api/family-dentistry
// @access  Public
const getFamilyDentistryPage = async (req, res) => {
  try {
    const page = await FamilyDentistryPage.findOne({ status: 'published' });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Family dentistry page not found'
      });
    }

    // Increment view count
    await FamilyDentistryPage.findByIdAndUpdate(page._id, { $inc: { viewCount: 1 } });

    res.json({
      success: true,
      data: page
    });
  } catch (error) {
    console.error('Error fetching family dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get family dentistry page (admin)
// @route   GET /api/family-dentistry/admin
// @access  Private
const getFamilyDentistryPageAdmin = async (req, res) => {
  try {
    const page = await FamilyDentistryPage.findOne().sort({ createdAt: -1 });

    if (!page) {
      // Create default page if none exists
      const defaultPage = new FamilyDentistryPage({
        hero: {
          ctaButtons: [
            { text: 'Request an Appointment', url: '#', style: 'primary' },
            { text: 'Learn More', url: '#', style: 'secondary' }
          ]
        },
        whyChooseFamily: {
          benefits: [
            {
              icon: 'Users',
              title: 'Simplified Scheduling',
              description: 'Request appointments for the whole family at convenient times, often on the same day',
              color: '#5FC1D7'
            },
            {
              icon: 'Heart',
              title: 'Personalized Care',
              description: 'Each family member receives care tailored to their individual needs and concerns',
              color: '#27A8E0'
            },
            {
              icon: 'Shield',
              title: 'Complete Records',
              description: 'All your family\'s dental histories in one place for coordinated, comprehensive care',
              color: '#10b981'
            },
            {
              icon: 'Smile',
              title: 'Preventive Focus',
              description: 'Emphasis on prevention for all ages to ensure everyone maintains healthy smiles',
              color: '#f59e0b'
            },
            {
              icon: 'CheckCircle',
              title: 'Comfortable Environment',
              description: 'A welcoming atmosphere where children and adults feel at ease',
              color: '#5FC1D7'
            },
            {
              icon: 'Award',
              title: 'Expert Care',
              description: 'Highly skilled dentist trained in treating patients of all ages',
              color: '#27A8E0'
            }
          ]
        },
        careForAges: {
          ageGroups: [
            {
              title: 'Children (Ages 2-12)',
              description: 'Gentle introduction to dental care, fluoride treatments, sealants, and habit monitoring to ensure healthy permanent teeth development',
              style: 'blue'
            },
            {
              title: 'Teens (Ages 13-19)',
              description: 'Preventive care, cavity prevention, orthodontic coordination, and education about healthy habits for lifelong dental wellness',
              style: 'orange'
            },
            {
              title: 'Adults (Ages 20-64)',
              description: 'Comprehensive care including preventive services, restorative treatments, and cosmetic enhancements',
              style: 'green'
            },
            {
              title: 'Seniors (65+)',
              description: 'Special attention to age-related issues, dentures, implants, and solutions for dry mouth and other senior concerns',
              style: 'yellow'
            }
          ]
        },
        familyServices: {
          serviceCategories: [
            {
              icon: 'CheckCircle',
              title: 'Preventive Care',
              services: [
                'Regular exams and cleanings',
                'Digital X-rays',
                'Fluoride treatments for children',
                'Dental sealants',
                'Oral health education'
              ],
              color: '#5FC1D7'
            },
            {
              icon: 'CheckCircle',
              title: 'Restorative Treatment',
              services: [
                'Fillings for cavities',
                'Crowns and bridges',
                'Root canal therapy',
                'Extractions when needed',
                'Dentures and implants for seniors'
              ],
              color: '#27A8E0'
            },
            {
              icon: 'CheckCircle',
              title: 'Cosmetic Services',
              services: [
                'Teeth whitening',
                'Dental bonding',
                'Veneers',
                'Smile makeovers',
                'Cosmetic contouring'
              ],
              color: '#10b981'
            },
            {
              icon: 'CheckCircle',
              title: 'Specialty Services',
              services: [
                'Emergency care',
                'Anxiety management',
                'Laser dentistry',
                'Advanced diagnostics',
                'Orthodontic coordination'
              ],
              color: '#f59e0b'
            }
          ]
        },
        familyTips: {
          tips: [
            {
              title: 'Start Early',
              description: 'Begin dental visits as soon as teeth appear to establish healthy habits from the start',
              style: 'blue'
            },
            {
              title: 'Brush Together',
              description: 'Make it a family routine to brush twice daily with fluoride toothpaste',
              style: 'orange'
            },
            {
              title: 'Limit Sugar & Soda',
              description: 'Reduce sugary snacks and drinks which contribute to tooth decay in children and adults',
              style: 'green'
            },
            {
              title: 'Regular Visits',
              description: 'Visit together twice yearly for preventive care and early problem detection',
              style: 'yellow'
            }
          ]
        },
        cta: {
          button: {
            text: 'Request an Appointment',
            style: 'primary'
          }
        }
      });

      await defaultPage.save();
      return res.json({
        success: true,
        data: defaultPage
      });
    }

    res.json({
      success: true,
      data: page
    });
  } catch (error) {
    console.error('Error fetching family dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update family dentistry page
// @route   PUT /api/family-dentistry
// @access  Private
const updateFamilyDentistryPage = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const updateData = { ...req.body };
    updateData.updatedBy = req.user.id;

    const page = await FamilyDentistryPage.findOneAndUpdate(
      {},
      updateData,
      {
        new: true,
        upsert: true,
        runValidators: true
      }
    );

    res.json({
      success: true,
      data: page,
      message: 'Family dentistry page updated successfully'
    });
  } catch (error) {
    console.error('Error updating family dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Publish family dentistry page
// @route   PATCH /api/family-dentistry/publish
// @access  Private
const publishFamilyDentistryPage = async (req, res) => {
  try {
    const page = await FamilyDentistryPage.findOneAndUpdate(
      {},
      {
        status: 'published',
        publishedAt: new Date(),
        updatedBy: req.user.id
      },
      { new: true }
    );

    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Family dentistry page not found'
      });
    }

    res.json({
      success: true,
      data: page,
      message: 'Family dentistry page published successfully'
    });
  } catch (error) {
    console.error('Error publishing family dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Archive family dentistry page
// @route   PATCH /api/family-dentistry/archive
// @access  Private
const archiveFamilyDentistryPage = async (req, res) => {
  try {
    const page = await FamilyDentistryPage.findOneAndUpdate(
      {},
      {
        status: 'archived',
        updatedBy: req.user.id
      },
      { new: true }
    );

    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Family dentistry page not found'
      });
    }

    res.json({
      success: true,
      data: page,
      message: 'Family dentistry page archived successfully'
    });
  } catch (error) {
    console.error('Error archiving family dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getFamilyDentistryPage,
  getFamilyDentistryPageAdmin,
  updateFamilyDentistryPage,
  publishFamilyDentistryPage,
  archiveFamilyDentistryPage
};