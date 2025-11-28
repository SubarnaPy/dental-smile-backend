const DentalVeneersPage = require('../models/DentalVeneersPage');

// Get dental veneers page data
exports.getDentalVeneersPage = async (req, res) => {
  try {
    let pageData = await DentalVeneersPage.findOne({ status: 'published' });

    if (!pageData) {
      // Create default data if none exists
      pageData = await createDefaultDentalVeneersPage();
    }

    // Return only enabled sections with enabled subsections
    const responseData = {
      pageTitle: pageData.pageTitle,
      pageSlug: pageData.pageSlug,
      metaDescription: pageData.metaDescription,
      sections: pageData.getEnabledSections(),
      globalStyles: pageData.globalStyles
    };

    res.json(responseData);
  } catch (error) {
    console.error('Error fetching dental veneers page:', error);
    res.status(500).json({ error: 'Failed to fetch dental veneers page data' });
  }
};

// Get page data for admin (includes disabled sections)
exports.getDentalVeneersPageAdmin = async (req, res) => {
  try {
    let pageData = await DentalVeneersPage.findOne();

    if (!pageData) {
      pageData = await createDefaultDentalVeneersPage();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching dental veneers page for admin:', error);
    res.status(500).json({ error: 'Failed to fetch dental veneers page data' });
  }
};

// Update dental veneers page
exports.updateDentalVeneersPage = async (req, res) => {
  try {
    const updateData = req.body;
    updateData.updatedAt = new Date();

    let pageData = await DentalVeneersPage.findOne();

    if (!pageData) {
      pageData = new DentalVeneersPage(updateData);
    } else {
      // Update existing fields
      Object.assign(pageData, updateData);
    }

    await pageData.save();
    res.json({ message: 'Dental veneers page updated successfully', data: pageData });
  } catch (error) {
    console.error('Error updating dental veneers page:', error);
    res.status(500).json({ error: 'Failed to update dental veneers page' });
  }
};

// Add new section
exports.addSection = async (req, res) => {
  try {
    const { sectionData } = req.body;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      pageData = await createDefaultDentalVeneersPage();
    }

    // Generate unique ID
    const sectionId = `section_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const newSection = {
      id: sectionId,
      name: sectionData.name || 'New Section',
      title: sectionData.title || 'New Section Title',
      type: sectionData.type || 'content',
      enabled: sectionData.enabled !== undefined ? sectionData.enabled : true,
      order: pageData.sections.length,
      content: sectionData.content || {},
      subsections: sectionData.subsections || [],
      style: sectionData.style || {},
      createdAt: new Date(),
      updatedAt: new Date()
    };

    pageData.sections.push(newSection);
    await pageData.save();

    res.json({ message: 'Section added successfully', section: newSection });
  } catch (error) {
    console.error('Error adding section:', error);
    res.status(500).json({ error: 'Failed to add section' });
  }
};

// Update section
exports.updateSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { sectionData } = req.body;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const sectionIndex = pageData.sections.findIndex(section => section.id === sectionId);
    if (sectionIndex === -1) {
      return res.status(404).json({ error: 'Section not found' });
    }

    // Update section data
    Object.assign(pageData.sections[sectionIndex], {
      ...sectionData,
      updatedAt: new Date()
    });

    await pageData.save();

    res.json({
      message: 'Section updated successfully',
      section: pageData.sections[sectionIndex]
    });
  } catch (error) {
    console.error('Error updating section:', error);
    res.status(500).json({ error: 'Failed to update section' });
  }
};

// Delete section
exports.deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.params;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    pageData.sections = pageData.sections.filter(section => section.id !== sectionId);
    await pageData.save();

    res.json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error('Error deleting section:', error);
    res.status(500).json({ error: 'Failed to delete section' });
  }
};

// Toggle section enabled/disabled
exports.toggleSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { enabled } = req.body;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const section = pageData.sections.find(section => section.id === sectionId);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    section.enabled = enabled;
    section.updatedAt = new Date();

    await pageData.save();

    res.json({
      message: `Section ${enabled ? 'enabled' : 'disabled'} successfully`,
      section
    });
  } catch (error) {
    console.error('Error toggling section:', error);
    res.status(500).json({ error: 'Failed to toggle section' });
  }
};

// Add subsection
exports.addSubsection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { subsectionData } = req.body;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const section = pageData.sections.find(section => section.id === sectionId);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    // Generate unique ID
    const subsectionId = `subsection_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const newSubsection = {
      id: subsectionId,
      title: subsectionData.title || 'New Subsection',
      content: subsectionData.content || {},
      enabled: subsectionData.enabled !== undefined ? subsectionData.enabled : true,
      order: section.subsections.length,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    section.subsections.push(newSubsection);
    section.updatedAt = new Date();

    await pageData.save();

    res.json({ message: 'Subsection added successfully', subsection: newSubsection });
  } catch (error) {
    console.error('Error adding subsection:', error);
    res.status(500).json({ error: 'Failed to add subsection' });
  }
};

// Update subsection
exports.updateSubsection = async (req, res) => {
  try {
    const { sectionId, subsectionId } = req.params;
    const { subsectionData } = req.body;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const section = pageData.sections.find(section => section.id === sectionId);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    const subsection = section.subsections.find(sub => sub.id === subsectionId);
    if (!subsection) {
      return res.status(404).json({ error: 'Subsection not found' });
    }

    // Update subsection data
    Object.assign(subsection, {
      ...subsectionData,
      updatedAt: new Date()
    });

    section.updatedAt = new Date();

    await pageData.save();

    res.json({
      message: 'Subsection updated successfully',
      subsection
    });
  } catch (error) {
    console.error('Error updating subsection:', error);
    res.status(500).json({ error: 'Failed to update subsection' });
  }
};

// Delete subsection
exports.deleteSubsection = async (req, res) => {
  try {
    const { sectionId, subsectionId } = req.params;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const section = pageData.sections.find(section => section.id === sectionId);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    section.subsections = section.subsections.filter(sub => sub.id !== subsectionId);
    section.updatedAt = new Date();

    await pageData.save();

    res.json({ message: 'Subsection deleted successfully' });
  } catch (error) {
    console.error('Error deleting subsection:', error);
    res.status(500).json({ error: 'Failed to delete subsection' });
  }
};

// Toggle subsection enabled/disabled
exports.toggleSubsection = async (req, res) => {
  try {
    const { sectionId, subsectionId } = req.params;
    const { enabled } = req.body;

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const section = pageData.sections.find(section => section.id === sectionId);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    const subsection = section.subsections.find(sub => sub.id === subsectionId);
    if (!subsection) {
      return res.status(404).json({ error: 'Subsection not found' });
    }

    subsection.enabled = enabled;
    subsection.updatedAt = new Date();
    section.updatedAt = new Date();

    await pageData.save();

    res.json({
      message: `Subsection ${enabled ? 'enabled' : 'disabled'} successfully`,
      subsection
    });
  } catch (error) {
    console.error('Error toggling subsection:', error);
    res.status(500).json({ error: 'Failed to toggle subsection' });
  }
};

// Reorder sections
exports.reorderSections = async (req, res) => {
  try {
    const { sectionOrder } = req.body; // Array of section IDs in new order

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    // Update order for each section
    sectionOrder.forEach((sectionId, index) => {
      const section = pageData.sections.find(s => s.id === sectionId);
      if (section) {
        section.order = index;
        section.updatedAt = new Date();
      }
    });

    await pageData.save();

    res.json({ message: 'Sections reordered successfully' });
  } catch (error) {
    console.error('Error reordering sections:', error);
    res.status(500).json({ error: 'Failed to reorder sections' });
  }
};

// Reorder subsections
exports.reorderSubsections = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { subsectionOrder } = req.body; // Array of subsection IDs in new order

    let pageData = await DentalVeneersPage.findOne();
    if (!pageData) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const section = pageData.sections.find(section => section.id === sectionId);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    // Update order for each subsection
    subsectionOrder.forEach((subsectionId, index) => {
      const subsection = section.subsections.find(s => s.id === subsectionId);
      if (subsection) {
        subsection.order = index;
        subsection.updatedAt = new Date();
      }
    });

    section.updatedAt = new Date();

    await pageData.save();

    res.json({ message: 'Subsections reordered successfully' });
  } catch (error) {
    console.error('Error reordering subsections:', error);
    res.status(500).json({ error: 'Failed to reorder subsections' });
  }
};

// Create default page data
async function createDefaultDentalVeneersPage() {
  const defaultSections = [
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
      id: 'features_section',
      name: 'Features Section',
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
    }
  ];

  const pageData = new DentalVeneersPage({
    pageTitle: 'Dental Veneers',
    pageSlug: 'dental-veneers',
    metaDescription: 'Professional dental veneers services in Ottawa',
    status: 'published',
    sections: defaultSections,
    globalStyles: {}
  });

  await pageData.save();
  return pageData;
}
