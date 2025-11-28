const DentalFillingsPage = require('../models/DentalFillingsPage');

// Get dental fillings page data
exports.getDentalFillingsPage = async (req, res) => {
  try {
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
      await pageData.save();
    }

    res.json({
      success: true,
      data: pageData
    });
  } catch (error) {
    console.error('Error fetching dental fillings page:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dental fillings page data',
      error: error.message
    });
  }
};

// Update dental fillings page data
exports.updateDentalFillingsPage = async (req, res) => {
  try {
    const updateData = req.body;

    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
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
      message: 'Dental fillings page updated successfully',
      data: pageData
    });
  } catch (error) {
    console.error('Error updating dental fillings page:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating dental fillings page data',
      error: error.message
    });
  }
};

// Reset to default data
exports.resetDentalFillingsPage = async (req, res) => {
  try {
    await DentalFillingsPage.deleteMany({});

    const pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
    await pageData.save();

    res.json({
      success: true,
      message: 'Dental fillings page reset to default successfully',
      data: pageData
    });
  } catch (error) {
    console.error('Error resetting dental fillings page:', error);
    res.status(500).json({
      success: false,
      message: 'Error resetting dental fillings page data',
      error: error.message
    });
  }
};

// Update hero section
exports.updateHeroSection = async (req, res) => {
  try {
    const heroData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
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

// Update why important section
exports.updateWhyImportantSection = async (req, res) => {
  try {
    const whyImportantData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
    }

    pageData.whyImportant = { ...pageData.whyImportant, ...whyImportantData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Why important section updated successfully',
      data: pageData.whyImportant
    });
  } catch (error) {
    console.error('Error updating why important section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating why important section',
      error: error.message
    });
  }
};

// Update filling options section
exports.updateFillingOptionsSection = async (req, res) => {
  try {
    const optionsData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
    }

    pageData.fillingOptions = { ...pageData.fillingOptions, ...optionsData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Filling options section updated successfully',
      data: pageData.fillingOptions
    });
  } catch (error) {
    console.error('Error updating filling options section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating filling options section',
      error: error.message
    });
  }
};

// Update filling process section
exports.updateFillingProcessSection = async (req, res) => {
  try {
    const processData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
    }

    pageData.fillingProcess = { ...pageData.fillingProcess, ...processData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Filling process section updated successfully',
      data: pageData.fillingProcess
    });
  } catch (error) {
    console.error('Error updating filling process section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating filling process section',
      error: error.message
    });
  }
};

// Update cost comparison section
exports.updateCostComparisonSection = async (req, res) => {
  try {
    const comparisonData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
    }

    pageData.costComparison = { ...pageData.costComparison, ...comparisonData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Cost comparison section updated successfully',
      data: pageData.costComparison
    });
  } catch (error) {
    console.error('Error updating cost comparison section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating cost comparison section',
      error: error.message
    });
  }
};

// Update care after section
exports.updateCareAfterSection = async (req, res) => {
  try {
    const careData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
    }

    pageData.careAfter = { ...pageData.careAfter, ...careData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Care after section updated successfully',
      data: pageData.careAfter
    });
  } catch (error) {
    console.error('Error updating care after section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating care after section',
      error: error.message
    });
  }
};

// Update prevention section
exports.updatePreventionSection = async (req, res) => {
  try {
    const preventionData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
    }

    pageData.prevention = { ...pageData.prevention, ...preventionData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Prevention section updated successfully',
      data: pageData.prevention
    });
  } catch (error) {
    console.error('Error updating prevention section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating prevention section',
      error: error.message
    });
  }
};

// Update CTA section
exports.updateCTASection = async (req, res) => {
  try {
    const ctaData = req.body;
    let pageData = await DentalFillingsPage.findOne();

    if (!pageData) {
      pageData = new DentalFillingsPage(DentalFillingsPage.getDefaultData());
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