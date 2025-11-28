const KidsDentistryPage = require('../models/KidsDentistryPage');

// Get kids dentistry page data
exports.getKidsDentistryPage = async (req, res) => {
  try {
    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
      await pageData.save();
    }

    res.json({
      success: true,
      data: pageData
    });
  } catch (error) {
    console.error('Error fetching kids dentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching kids dentistry page data',
      error: error.message
    });
  }
};

// Update kids dentistry page data
exports.updateKidsDentistryPage = async (req, res) => {
  try {
    const updateData = req.body;

    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    }

    // Update fields
    Object.keys(updateData).forEach(key => {
      if (updateData[key] !== undefined) {
        pageData[key] = updateData[key];
      }
    });

    await pageData.save();

    res.json({
      success: true,
      message: 'Kids dentistry page updated successfully',
      data: pageData
    });
  } catch (error) {
    console.error('Error updating kidsdentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating kidsdentistry page data',
      error: error.message
    });
  }
};

// Reset to default data
exports.resetKidsDentistryPage = async (req, res) => {
  try {
    await KidsDentistryPage.deleteMany({});

    const pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    await pageData.save();

    res.json({
      success: true,
      message: 'Kidsdentistry page reset to default successfully',
      data: pageData
    });
  } catch (error) {
    console.error('Error resetting kidsdentistry page:', error);
    res.status(500).json({
      success: false,
      message: 'Error resetting kidsdentistry page data',
      error: error.message
    });
  }
};

// Update hero section
exports.updateHeroSection = async (req, res) => {
  try {
    const heroData = req.body;
    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    }

    pageData.hero = { ...pageData.hero, ...heroData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Hero section updated successfully',
      data: pageData.hero
    });
  } catch (error) {
    console.error('Error updating hero section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating hero section',
      error: error.message
    });
  }
};

// Update why matters section
exports.updateWhyMattersSection = async (req, res) => {
  try {
    const whyMattersData = req.body;
    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    }

    pageData.whyMatters = { ...pageData.whyMatters, ...whyMattersData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Why matters section updated successfully',
      data: pageData.whyMatters
    });
  } catch (error) {
    console.error('Error updating why matters section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating why matters section',
      error: error.message
    });
  }
};

// Update kid friendly approach section
exports.updateKidFriendlyApproachSection = async (req, res) => {
  try {
    const approachData = req.body;
    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    }

    pageData.kidFriendlyApproach = { ...pageData.kidFriendlyApproach, ...approachData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Kid friendly approach section updated successfully',
      data: pageData.kidFriendlyApproach
    });
  } catch (error) {
    console.error('Error updating kid friendly approach section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating kid friendly approach section',
      error: error.message
    });
  }
};

// Update services section
exports.updateServicesSection = async (req, res) => {
  try {
    const servicesData = req.body;
    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    }

    pageData.services = { ...pageData.services, ...servicesData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Services section updated successfully',
      data: pageData.services
    });
  } catch (error) {
    console.error('Error updating services section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating services section',
      error: error.message
    });
  }
};

// Update milestones section
exports.updateMilestonesSection = async (req, res) => {
  try {
    const milestonesData = req.body;
    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    }

    pageData.milestones = { ...pageData.milestones, ...milestonesData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Milestones section updated successfully',
      data: pageData.milestones
    });
  } catch (error) {
    console.error('Error updating milestones section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating milestones section',
      error: error.message
    });
  }
};

// Update CTA section
exports.updateCTASection = async (req, res) => {
  try {
    const ctaData = req.body;
    let pageData = await KidsDentistryPage.findOne();

    if (!pageData) {
      pageData = new KidsDentistryPage(KidsDentistryPage.getDefaultData());
    }

    pageData.cta = { ...pageData.cta, ...ctaData };
    await pageData.save();

    res.json({
      success: true,
      message: 'CTA section updated successfully',
      data: pageData.cta
    });
  } catch (error) {
    console.error('Error updating CTA section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating CTA section',
      error: error.message
    });
  }
};