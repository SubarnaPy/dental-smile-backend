const { validationResult } = require('express-validator');
const DentalExamsPage = require('../models/DentalExamsPage');

// @desc    Get dental exams page
// @route   GET /api/dental-exams
// @access  Public
const getDentalExamsPage = async (req, res) => {
  try {
    const page = await DentalExamsPage.findOne({ status: 'published' });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Dental exams page not found'
      });
    }

    // Increment view count
    await DentalExamsPage.findByIdAndUpdate(page._id, { $inc: { viewCount: 1 } });

    res.json({
      success: true,
      data: page
    });
  } catch (error) {
    console.error('Error fetching dental exams page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get dental exams page (admin)
// @route   GET /api/dental-exams/admin
// @access  Private
const getDentalExamsPageAdmin = async (req, res) => {
  try {
    const page = await DentalExamsPage.findOne().sort({ createdAt: -1 });

    if (!page) {
      // Create default page if none exists
      const defaultPage = new DentalExamsPage({
        hero: {
          ctaButtons: [
            { text: 'Request an Appointment', url: '#', style: 'primary' },
            { text: 'Learn More', url: '#', style: 'secondary' }
          ]
        },
        whyExamsMatter: {
          cards: [
            {
              icon: 'Shield',
              title: 'Early Detection',
              description: 'Catch cavities, gum disease, and other problems before they become serious and expensive to treat',
              color: '#5FC1D7'
            },
            {
              icon: 'Heart',
              title: 'Overall Health',
              description: 'Oral health is connected to your overall well-being. Regular cleanings help prevent serious health issues',
              color: '#27A8E0'
            },
            {
              icon: 'Sparkles',
              title: 'Beautiful Smile',
              description: 'Professional cleanings remove stains and tartar buildup, leaving your teeth bright and beautiful',
              color: '#10b981'
            }
          ]
        },
        examProcess: {
          steps: [
            {
              number: 1,
              title: 'Digital X-rays',
              description: 'Advanced imaging to detect cavities, bone loss, and other issues not visible to the naked eye',
              color: '#5FC1D7'
            },
            {
              number: 2,
              title: 'Oral Health Assessment',
              description: 'Complete examination of teeth, gums, tongue, and oral tissues for signs of disease',
              color: '#27A8E0'
            },
            {
              number: 3,
              title: 'Professional Cleaning',
              description: 'Removal of plaque and tartar buildup with specialized instruments',
              color: '#10b981'
            },
            {
              number: 4,
              title: 'Personalized Recommendations',
              description: 'Custom care plan and preventive strategies tailored to your needs',
              color: '#f59e0b'
            }
          ]
        },
        examFrequency: {
          options: [
            {
              icon: 'Smile',
              title: 'Healthy Teeth',
              frequency: 'Twice per year',
              description: 'Regular visits every 6 months for those with good oral health',
              color: '#5FC1D7',
              highlighted: false
            },
            {
              icon: 'Check',
              title: 'Gum Disease Risk',
              frequency: '3-4 times per year',
              description: 'More frequent visits if you have a history of gum disease',
              color: '#27A8E0',
              highlighted: true
            },
            {
              icon: 'Zap',
              title: 'Special Situations',
              frequency: 'As recommended',
              description: 'More frequent if you have active cavities or serious conditions',
              color: '#10b981',
              highlighted: false
            }
          ]
        },
        whatToExpect: {
          items: [
            {
              title: 'Comfortable Environment',
              description: 'Our office is designed for maximum comfort with modern equipment and a caring staff',
              style: 'blue'
            },
            {
              title: 'Gentle Techniques',
              description: 'We use gentle, pain-free cleaning methods and advanced technology for your comfort',
              style: 'orange'
            },
            {
              title: 'Education & Discussion',
              description: 'Dr. Dhaliwal will discuss findings and answer all your questions about your oral health',
              style: 'green'
            },
            {
              title: 'Personalized Care Plan',
              description: 'Receive a customized care plan with tips for maintaining excellent oral health at home',
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
    console.error('Error fetching dental exams page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update dental exams page
// @route   PUT /api/dental-exams
// @access  Private
const updateDentalExamsPage = async (req, res) => {
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

    const page = await DentalExamsPage.findOneAndUpdate(
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
      message: 'Dental exams page updated successfully'
    });
  } catch (error) {
    console.error('Error updating dental exams page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Publish dental exams page
// @route   PATCH /api/dental-exams/publish
// @access  Private
const publishDentalExamsPage = async (req, res) => {
  try {
    const page = await DentalExamsPage.findOneAndUpdate(
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
        message: 'Dental exams page not found'
      });
    }

    res.json({
      success: true,
      data: page,
      message: 'Dental exams page published successfully'
    });
  } catch (error) {
    console.error('Error publishing dental exams page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Archive dental exams page
// @route   PATCH /api/dental-exams/archive
// @access  Private
const archiveDentalExamsPage = async (req, res) => {
  try {
    const page = await DentalExamsPage.findOneAndUpdate(
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
        message: 'Dental exams page not found'
      });
    }

    res.json({
      success: true,
      data: page,
      message: 'Dental exams page archived successfully'
    });
  } catch (error) {
    console.error('Error archiving dental exams page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getDentalExamsPage,
  getDentalExamsPageAdmin,
  updateDentalExamsPage,
  publishDentalExamsPage,
  archiveDentalExamsPage
};