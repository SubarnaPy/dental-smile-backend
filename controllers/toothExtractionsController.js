const ToothExtractionsPage = require('../models/ToothExtractionsPage');

// Get tooth extractions page data
exports.getToothExtractionsPage = async (req, res) => {
  try {
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
      await pageData.save();
    }

    res.json({
      success: true,
      data: pageData
    });
  } catch (error) {
    console.error('Error fetching tooth extractions page:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching tooth extractions page data',
      error: error.message
    });
  }
};

// Update tooth extractions page data
exports.updateToothExtractionsPage = async (req, res) => {
  try {
    const updateData = req.body;

    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
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
      message: 'Tooth extractions page updated successfully',
      data: pageData
    });
  } catch (error) {
    console.error('Error updating tooth extractions page:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating tooth extractions page data',
      error: error.message
    });
  }
};

// Reset to default data
exports.resetToothExtractionsPage = async (req, res) => {
  try {
    await ToothExtractionsPage.deleteMany({});

    const pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
    await pageData.save();

    res.json({
      success: true,
      message: 'Tooth extractions page reset to default successfully',
      data: pageData
    });
  } catch (error) {
    console.error('Error resetting tooth extractions page:', error);
    res.status(500).json({
      success: false,
      message: 'Error resetting tooth extractions page data',
      error: error.message
    });
  }
};

// Update hero section
exports.updateHeroSection = async (req, res) => {
  try {
    const heroData = req.body;
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
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

// Update when necessary section
exports.updateWhenNecessarySection = async (req, res) => {
  try {
    const whenNecessaryData = req.body;
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
    }

    pageData.whenNecessary = { ...pageData.whenNecessary, ...whenNecessaryData };
    await pageData.save();

    res.json({
      success: true,
      message: 'When necessary section updated successfully',
      data: pageData.whenNecessary
    });
  } catch (error) {
    console.error('Error updating when necessary section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating when necessary section',
      error: error.message
    });
  }
};

// Update extraction process section
exports.updateExtractionProcessSection = async (req, res) => {
  try {
    const processData = req.body;
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
    }

    pageData.extractionProcess = { ...pageData.extractionProcess, ...processData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Extraction process section updated successfully',
      data: pageData.extractionProcess
    });
  } catch (error) {
    console.error('Error updating extraction process section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating extraction process section',
      error: error.message
    });
  }
};

// Update what to expect section
exports.updateWhatToExpectSection = async (req, res) => {
  try {
    const expectData = req.body;
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
    }

    pageData.whatToExpect = { ...pageData.whatToExpect, ...expectData };
    await pageData.save();

    res.json({
      success: true,
      message: 'What to expect section updated successfully',
      data: pageData.whatToExpect
    });
  } catch (error) {
    console.error('Error updating what to expect section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating what to expect section',
      error: error.message
    });
  }
};

// Update recovery tips section
exports.updateRecoveryTipsSection = async (req, res) => {
  try {
    const tipsData = req.body;
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
    }

    pageData.recoveryTips = { ...pageData.recoveryTips, ...tipsData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Recovery tips section updated successfully',
      data: pageData.recoveryTips
    });
  } catch (error) {
    console.error('Error updating recovery tips section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating recovery tips section',
      error: error.message
    });
  }
};

// Update replacement options section
exports.updateReplacementOptionsSection = async (req, res) => {
  try {
    const optionsData = req.body;
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
    }

    pageData.replacementOptions = { ...pageData.replacementOptions, ...optionsData };
    await pageData.save();

    res.json({
      success: true,
      message: 'Replacement options section updated successfully',
      data: pageData.replacementOptions
    });
  } catch (error) {
    console.error('Error updating replacement options section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating replacement options section',
      error: error.message
    });
  }
};

// Update CTA section
exports.updateCTASection = async (req, res) => {
  try {
    const ctaData = req.body;
    let pageData = await ToothExtractionsPage.findOne();

    if (!pageData) {
      pageData = new ToothExtractionsPage(ToothExtractionsPage.getDefaultData());
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