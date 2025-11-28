const ClearAlignersPage = require('../models/ClearAlignersPage');

// Get public clear aligners page (only enabled sections)
exports.getClearAlignersPage = async (req, res) => {
  try {
    let pageData = await ClearAlignersPage.findOne({ status: 'published' });

    if (!pageData) {
      pageData = await createDefaultClearAlignersPage();
    }

    const responseData = {
      pageTitle: pageData.pageTitle,
      pageSlug: pageData.pageSlug,
      metaDescription: pageData.metaDescription,
      sections: pageData.getEnabledSections(),
      globalStyles: pageData.globalStyles
    };

    res.json(responseData);
  } catch (error) {
    console.error('Error fetching clear aligners page:', error);
    res.status(500).json({ error: 'Failed to fetch clear aligners page data' });
  }
};

// Admin page (includes disabled sections)
exports.getClearAlignersPageAdmin = async (req, res) => {
  try {
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) {
      pageData = await createDefaultClearAlignersPage();
    }
    res.json(pageData);
  } catch (error) {
    console.error('Error fetching clear aligners page for admin:', error);
    res.status(500).json({ error: 'Failed to fetch clear aligners page data' });
  }
};

// Update page
exports.updateClearAlignersPage = async (req, res) => {
  try {
    const updateData = req.body;
    updateData.updatedAt = new Date();

    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) {
      pageData = new ClearAlignersPage(updateData);
    } else {
      Object.assign(pageData, updateData);
    }

    await pageData.save();
    res.json({ message: 'Clear aligners page updated successfully', data: pageData });
  } catch (error) {
    console.error('Error updating clear aligners page:', error);
    res.status(500).json({ error: 'Failed to update clear aligners page' });
  }
};

// Add new section
exports.addSection = async (req, res) => {
  try {
    const { sectionData } = req.body;

    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) {
      pageData = await createDefaultClearAlignersPage();
    }

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

    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    const sectionIndex = pageData.sections.findIndex(s => s.id === sectionId);
    if (sectionIndex === -1) return res.status(404).json({ error: 'Section not found' });

    Object.assign(pageData.sections[sectionIndex], { ...sectionData, updatedAt: new Date() });
    await pageData.save();

    res.json({ message: 'Section updated successfully', section: pageData.sections[sectionIndex] });
  } catch (error) {
    console.error('Error updating section:', error);
    res.status(500).json({ error: 'Failed to update section' });
  }
};

// Delete section
exports.deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    pageData.sections = pageData.sections.filter(s => s.id !== sectionId);
    await pageData.save();

    res.json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error('Error deleting section:', error);
    res.status(500).json({ error: 'Failed to delete section' });
  }
};

// Toggle section
exports.toggleSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { enabled } = req.body;
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    const section = pageData.sections.find(s => s.id === sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

    section.enabled = enabled;
    section.updatedAt = new Date();
    await pageData.save();

    res.json({ message: `Section ${enabled ? 'enabled' : 'disabled'} successfully`, section });
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
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    const section = pageData.sections.find(s => s.id === sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

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
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    const section = pageData.sections.find(s => s.id === sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

    const subsection = section.subsections.find(sub => sub.id === subsectionId);
    if (!subsection) return res.status(404).json({ error: 'Subsection not found' });

    Object.assign(subsection, { ...subsectionData, updatedAt: new Date() });
    section.updatedAt = new Date();
    await pageData.save();

    res.json({ message: 'Subsection updated successfully', subsection });
  } catch (error) {
    console.error('Error updating subsection:', error);
    res.status(500).json({ error: 'Failed to update subsection' });
  }
};

// Delete subsection
exports.deleteSubsection = async (req, res) => {
  try {
    const { sectionId, subsectionId } = req.params;
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    const section = pageData.sections.find(s => s.id === sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

    section.subsections = section.subsections.filter(sub => sub.id !== subsectionId);
    section.updatedAt = new Date();
    await pageData.save();

    res.json({ message: 'Subsection deleted successfully' });
  } catch (error) {
    console.error('Error deleting subsection:', error);
    res.status(500).json({ error: 'Failed to delete subsection' });
  }
};

// Toggle subsection
exports.toggleSubsection = async (req, res) => {
  try {
    const { sectionId, subsectionId } = req.params;
    const { enabled } = req.body;
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    const section = pageData.sections.find(s => s.id === sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

    const subsection = section.subsections.find(sub => sub.id === subsectionId);
    if (!subsection) return res.status(404).json({ error: 'Subsection not found' });

    subsection.enabled = enabled;
    subsection.updatedAt = new Date();
    section.updatedAt = new Date();
    await pageData.save();

    res.json({ message: `Subsection ${enabled ? 'enabled' : 'disabled'} successfully`, subsection });
  } catch (error) {
    console.error('Error toggling subsection:', error);
    res.status(500).json({ error: 'Failed to toggle subsection' });
  }
};

// Reorder sections
exports.reorderSections = async (req, res) => {
  try {
    const { sectionOrder } = req.body;
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

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
    const { subsectionOrder } = req.body;
    let pageData = await ClearAlignersPage.findOne();
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    const section = pageData.sections.find(s => s.id === sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

    subsectionOrder.forEach((subId, index) => {
      const sub = section.subsections.find(s => s.id === subId);
      if (sub) {
        sub.order = index;
        sub.updatedAt = new Date();
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
async function createDefaultClearAlignersPage() {
  const defaultSections = [
    {
      id: 'hero',
      name: 'Hero',
      title: 'Invisalign Clear Aligners',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        category: 'ORTHODONTIC TREATMENT',
        title: 'Invisalign Clear Aligners',
        subtitle: 'We offer Invisalign as a discreet and comfortable solution for effective teeth straightening without the visibility of traditional braces. Custom-fitted and removable aligners that fit your lifestyle.',
        primaryButtonText: 'Free Smile Evaluation',
        secondaryButtonText: 'Request an Appointment',
        image: '/api/placeholder/600/400'
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'features',
      name: 'Get the Ideal Smile',
      title: 'Get the Ideal Smile',
      type: 'features',
      enabled: true,
      order: 1,
      content: {
        title: 'Get the Ideal Smile',
        subtitle: 'Stop worrying about your smile. We provide the best clear aligners in Ottawa.',
        cards: [
          { title: 'Compassionate Care', description: "Doctors who hear your needs", icon: 'Heart', color: '#6366f1' },
          { title: 'Modern Technology', description: 'Advanced office equipment', icon: 'Award', color: '#5FC1D7' },
          { title: 'Flexible Payment', description: 'Affordable payment plans', icon: 'Shield', color: '#27A8E0' },
          { title: 'Quick Service', description: 'Reduced wait times', icon: 'Zap', color: '#10b981' }
        ]
      },
      subsections: [],
      style: {},
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const pageData = new ClearAlignersPage({
    pageTitle: 'Invisalign Clear Aligners',
    pageSlug: 'clear-aligners',
    metaDescription: 'Invisalign and clear aligner services',
    status: 'published',
    sections: defaultSections,
    globalStyles: {}
  });

  await pageData.save();
  return pageData;
}