const { validationResult } = require('express-validator');
const EmergencyDentistryPage = require('../models/EmergencyDentistryPage');

// @desc    Get emergency dentistry page
// @route   GET /api/emergency-dentistry
// @access  Public
const getEmergencyDentistryPage = async (req, res) => {
  try {
    const page = await EmergencyDentistryPage.findOne({ status: 'published' });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Emergency dentistry page not found'
      });
    }

    // Increment view count
    await EmergencyDentistryPage.findByIdAndUpdate(page._id, { $inc: { viewCount: 1 } });

    res.json({
      success: true,
      data: page
    });
  } catch (error) {
    console.error('Error fetching emergency dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get emergency dentistry page (admin)
// @route   GET /api/emergency-dentistry/admin
// @access  Private
const getEmergencyDentistryPageAdmin = async (req, res) => {
  try {
    const page = await EmergencyDentistryPage.findOne().sort({ createdAt: -1 });

    if (!page) {
      // Create default page if none exists
      const defaultPage = new EmergencyDentistryPage({
        hero: {
          ctaButtons: [
            { text: 'Call for Emergency Care', url: 'tel:+1234567890', style: 'primary' },
            { text: 'Learn More', url: '#', style: 'secondary' }
          ]
        },
        whyMatters: {
          cards: [
            {
              icon: 'Shield',
              title: 'Immediate Relief',
              description: 'Get fast pain relief and emergency treatment when you need it most',
              color: '#5FC1D7'
            },
            {
              icon: 'Heart',
              title: 'Prevent Complications',
              description: 'Prompt treatment prevents infections from spreading and causing serious health issues',
              color: '#27A8E0'
            },
            {
              icon: 'Zap',
              title: 'Save Your Teeth',
              description: 'Quick action can save a knocked-out tooth or prevent permanent damage to your smile',
              color: '#10b981'
            }
          ]
        },
        commonEmergencies: {
          items: [
            {
              number: 1,
              title: 'Severe Toothache & Abscesses',
              description: 'Persistent pain or infection requiring immediate treatment to prevent spread',
              color: '#5FC1D7'
            },
            {
              number: 2,
              title: 'Broken or Cracked Teeth',
              description: 'Damage from accidents requiring urgent restoration and protection',
              color: '#27A8E0'
            },
            {
              number: 3,
              title: 'Knocked-Out Teeth',
              description: 'Rapid treatment can save your tooth when acted upon immediately',
              color: '#10b981'
            },
            {
              number: 4,
              title: 'Lost Fillings & Crowns',
              description: 'Quick replacement to restore protection and prevent further damage',
              color: '#f59e0b'
            }
          ]
        },
        whatToExpect: {
          items: [
            {
              title: 'Quick Assessment',
              description: 'We prioritize immediate evaluation and pain relief for all emergency cases',
              style: 'blue'
            },
            {
              title: 'Effective Treatment',
              description: 'Fast and effective treatment using advanced technology and proven techniques',
              style: 'orange'
            },
            {
              title: 'Expert Care',
              description: 'Dr. Dhaliwal provides compassionate and professional emergency dental care',
              style: 'green'
            },
            {
              title: 'Follow-up Plan',
              description: 'Receive comprehensive care instructions and a plan for any ongoing treatment',
              style: 'yellow'
            }
          ]
        },
        firstAidTips: {
          tips: [
            {
              title: 'For Tooth Pain',
              description: 'Rinse with warm salt water, take pain reliever, apply cold compress to cheek',
              style: 'blue'
            },
            {
              title: 'For Knocked Out Tooth',
              description: 'Handle by crown not root, rinse with milk or saline, place in milk and bring it immediately',
              style: 'orange'
            },
            {
              title: 'For Cracked Tooth',
              description: 'Rinse with warm water, apply cold compress, avoid chewing on that side',
              style: 'green'
            },
            {
              title: 'For Bleeding Gums',
              description: 'Apply gentle pressure with gauze, rinse with salt water, control bleeding before arrival',
              style: 'yellow'
            }
          ]
        },
        cta: {
          button: {
            text: 'Call for Emergency Care',
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
    console.error('Error fetching emergency dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update emergency dentistry page
// @route   PUT /api/emergency-dentistry
// @access  Private
const updateEmergencyDentistryPage = async (req, res) => {
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

    const page = await EmergencyDentistryPage.findOneAndUpdate(
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
      message: 'Emergency dentistry page updated successfully'
    });
  } catch (error) {
    console.error('Error updating emergency dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Publish emergency dentistry page
// @route   PATCH /api/emergency-dentistry/publish
// @access  Private
const publishEmergencyDentistryPage = async (req, res) => {
  try {
    const page = await EmergencyDentistryPage.findOneAndUpdate(
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
        message: 'Emergency dentistry page not found'
      });
    }

    res.json({
      success: true,
      data: page,
      message: 'Emergency dentistry page published successfully'
    });
  } catch (error) {
    console.error('Error publishing emergency dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Archive emergency dentistry page
// @route   PATCH /api/emergency-dentistry/archive
// @access  Private
const archiveEmergencyDentistryPage = async (req, res) => {
  try {
    const page = await EmergencyDentistryPage.findOneAndUpdate(
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
        message: 'Emergency dentistry page not found'
      });
    }

    res.json({
      success: true,
      data: page,
      message: 'Emergency dentistry page archived successfully'
    });
  } catch (error) {
    console.error('Error archiving emergency dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getEmergencyDentistryPage,
  getEmergencyDentistryPageAdmin,
  updateEmergencyDentistryPage,
  publishEmergencyDentistryPage,
  archiveEmergencyDentistryPage
};