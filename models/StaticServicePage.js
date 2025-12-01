const mongoose = require("mongoose");

// Schema for individual list items (used in benefits, features, tips, etc.)
const ListItemSchema = new mongoose.Schema(
  {
    icon: { type: String, default: "" },
    iconColor: { type: String, default: "#5FC1D7" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    items: [{ type: String }], // For nested bullet points
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

// Schema for process/timeline steps
const ProcessStepSchema = new mongoose.Schema(
  {
    stepNumber: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    icon: { type: String, default: "" },
    iconColor: { type: String, default: "#5FC1D7" },
    backgroundColor: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

// Schema for FAQ items
const FAQItemSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

// Schema for comparison items (like Professional vs Store-Bought)
const ComparisonItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    icon: { type: String, default: "" },
    iconColor: { type: String, default: "#5FC1D7" },
    backgroundColor: { type: String, default: "" },
    items: [{ type: String }],
    isPositive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

// Schema for type/variety items (like types of crowns, veneers, etc.)
const TypeItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    icon: { type: String, default: "" },
    iconColor: { type: String, default: "#5FC1D7" },
    features: [{ type: String }],
    price: { type: String, default: "" },
    isRecommended: { type: Boolean, default: false },
    borderColor: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

// Schema for age group/milestone items
const AgeGroupSchema = new mongoose.Schema(
  {
    ageRange: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    borderColor: { type: String, default: "#5FC1D7" },
    backgroundColor: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

// Schema for care/tip sections with multiple categories
const CareSectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    borderColor: { type: String, default: "#5FC1D7" },
    backgroundColor: { type: String, default: "" },
    items: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

// Hero Section Schema
const HeroSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  category: { type: String, default: "" },
  categoryColor: { type: String, default: "#5FC1D7" },
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  primaryButtonText: { type: String, default: "Request an Appointment" },
  primaryButtonLink: { type: String, default: "/contact" },
  primaryButtonColor: { type: String, default: "#27A8E0" },
  secondaryButtonText: { type: String, default: "Learn More" },
  secondaryButtonLink: { type: String, default: "" },
  secondaryButtonColor: { type: String, default: "#5FC1D7" },
  backgroundImage: { type: String, default: "" },
  heroImage: { type: String, default: "" },
  heroImageAlt: { type: String, default: "" },
  gradientFrom: { type: String, default: "blue-50" },
  gradientVia: { type: String, default: "" },
  gradientTo: { type: String, default: "white" },
});

// Introduction Section Schema
const IntroductionSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  backgroundColor: { type: String, default: "gray-50" },
});

// Benefits Section Schema
const BenefitsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "gray-50" },
  items: [ListItemSchema],
});

// Features Section Schema
const FeaturesSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  imagePosition: { type: String, enum: ["left", "right"], default: "left" },
  items: [ListItemSchema],
});

// Process/Steps Section Schema
const ProcessSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "gray-50" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  steps: [ProcessStepSchema],
});

// What to Expect Section Schema
const WhatToExpectSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "gray-50" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  items: [CareSectionSchema],
});

// Types/Varieties Section Schema (for different types of treatments)
const TypesSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  images: [{ url: { type: String }, alt: { type: String } }],
  types: [TypeItemSchema],
});

// Comparison Section Schema
const ComparisonSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  comparisons: [ComparisonItemSchema],
});

// Tips/Care Instructions Section Schema
const TipsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  sections: [CareSectionSchema],
});

// Aftercare Section Schema
const AftercareSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  sections: [CareSectionSchema],
});

// Age Groups/Milestones Section Schema
const AgeGroupsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  groups: [AgeGroupSchema],
});

// FAQ Section Schema
const FAQSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "Frequently Asked Questions" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "gray-50" },
  faqs: [FAQItemSchema],
});

// Stats/Numbers Section Schema
const StatItemSchema = new mongoose.Schema(
  {
    value: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String, default: "" },
    color: { type: String, default: "#5FC1D7" },
    order: { type: Number, default: 0 },
  },
  { _id: true },
);

const StatsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  stats: [StatItemSchema],
});

// CTA Section Schema
const CTASectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  backgroundImage: { type: String, default: "" },
  gradientFrom: { type: String, default: "slate-700" },
  gradientVia: { type: String, default: "blue-700" },
  gradientTo: { type: String, default: "sky-700" },
  primaryButtonText: { type: String, default: "Request an Appointment" },
  primaryButtonLink: { type: String, default: "/contact" },
  primaryButtonColor: { type: String, default: "#27A8E0" },
  secondaryButtonText: { type: String, default: "" },
  secondaryButtonLink: { type: String, default: "" },
  phone: { type: String, default: "437-913-9288" },
  address: { type: String, default: "888 Meadowlands Dr, Ottawa, ON K2C 3R2" },
  showContactInfo: { type: Boolean, default: true },
});

// Technology Section Schema
const TechnologySectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "white" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  items: [ListItemSchema],
});

// Services List Section Schema (for family dentistry, etc.)
const ServiceListSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "gray-50" },
  categories: [
    {
      title: { type: String },
      icon: { type: String },
      iconColor: { type: String, default: "#5FC1D7" },
      items: [{ type: String }],
      order: { type: Number, default: 0 },
    },
  ],
});

// Custom Section Schema (for admin-created sections)
// New sections for specific services

// AllOnFour Section (Dental Implants)
const AllOnFourSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  items: [ListItemSchema],
});

// Seniors Section (Dental Implants)
const SeniorsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#ffffff" },
  items: [ListItemSchema],
});

// Treatments Section (TMJ)
const TreatmentsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#ffffff" },
  items: [CareSectionSchema],
});

// TreatmentBenefits Section (TMJ)
const TreatmentBenefitsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  items: [ListItemSchema],
});

// Approach Section (TMJ)
const ApproachSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#ffffff" },
  items: [ListItemSchema],
});

// WhenNeeded Section (Root Canal)
const WhenNeededSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  items: [ListItemSchema],
});

// Results Section (Teeth Whitening, Veneers)
const ResultsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  sections: [CareSectionSchema],
  items: [ListItemSchema],
});

// VeneerBenefits Section (Veneers)
const VeneerBenefitsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  sections: [
    {
      title: { type: String },
      items: [{ type: String }],
      iconColor: { type: String, default: "#5FC1D7" },
      order: { type: Number, default: 0 },
    },
  ],
});

// Care Section (Veneers)
const CareSectionFullSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  backgroundColor: { type: String, default: "#ffffff" },
  sections: [CareSectionSchema],
});

// Importance Section (Clear Aligners)
const ImportanceSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  sections: [CareSectionSchema],
});

// Offerings Section (Clear Aligners)
const OfferingsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#ffffff" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  items: [ListItemSchema],
});

// Suitability Section (Clear Aligners)
const SuitabilitySectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  note: { type: String, default: "" },
  sections: [
    {
      title: { type: String },
      iconColor: { type: String, default: "#5FC1D7" },
      items: [{ type: String }],
      order: { type: Number, default: 0 },
    },
  ],
});

// GetStarted Section (Clear Aligners)
const GetStartedSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#ffffff" },
  steps: [ProcessStepSchema],
});

// PartialBenefits Section (Partial Dentures)
const PartialBenefitsSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#ffffff" },
  items: [ListItemSchema],
});

// Services Section (Partial Dentures)
const ServicesSectionSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  backgroundColor: { type: String, default: "#f9fafb" },
  items: [ListItemSchema],
});

const CustomSectionSchema = new mongoose.Schema(
  {
    sectionId: { type: String, required: true },
    sectionType: {
      type: String,
      enum: [
        "text",
        "text-image",
        "cards",
        "list",
        "steps",
        "comparison",
        "faq",
        "cta",
        "gallery",
        "testimonials",
      ],
      default: "text",
    },
    enabled: { type: Boolean, default: true },
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    description: { type: String, default: "" },
    backgroundColor: { type: String, default: "white" },
    image: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    imagePosition: {
      type: String,
      enum: ["left", "right", "top", "bottom", "background"],
      default: "right",
    },
    items: [mongoose.Schema.Types.Mixed],
    order: { type: Number, default: 100 },
  },
  { _id: true },
);

// SEO Schema
const SEOSchema = new mongoose.Schema({
  metaTitle: { type: String, default: "" },
  metaDescription: { type: String, default: "" },
  metaKeywords: [{ type: String }],
  ogTitle: { type: String, default: "" },
  ogDescription: { type: String, default: "" },
  ogImage: { type: String, default: "" },
  canonicalUrl: { type: String, default: "" },
});

// Main Static Service Page Schema
const StaticServicePageSchema = new mongoose.Schema(
  {
    // Identification
    serviceKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
      enum: [
        "emergency-dentistry",
        "dental-exams-cleanings",
        "family-dentistry",
        "kids-dentistry",
        "tooth-extractions",
        "dental-fillings",
        "dental-sealants",
        "nitrous-sedation",
        "night-guards",
        "dental-bonding",
        "dental-crowns",
        "dental-bridges",
        "dental-implants",
        "partial-dentures",
        "tmj-consult",
        "root-canal-therapy",
        "teeth-whitening",
        "dental-veneers",
        "clear-aligners",
      ],
    },

    // Display info
    title: { type: String, required: true },
    displayName: { type: String, required: true },
    slug: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceCategory",
    },
    categoryLegacy: {
      type: String,
      enum: [
        "preventive",
        "restorative",
        "cosmetic",
        "emergency",
        "specialty",
        "orthodontic",
      ],
    },

    // Status
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },

    // Brand colors for this service
    brandColors: {
      primary: { type: String, default: "#5FC1D7" },
      secondary: { type: String, default: "#27A8E0" },
      accent: { type: String, default: "#d97706" },
    },

    // All sections
    hero: HeroSectionSchema,
    introduction: IntroductionSectionSchema,
    benefits: BenefitsSectionSchema,
    features: FeaturesSectionSchema,
    process: ProcessSectionSchema,
    whatToExpect: WhatToExpectSectionSchema,
    types: TypesSectionSchema,
    comparison: ComparisonSectionSchema,
    tips: TipsSectionSchema,
    aftercare: AftercareSectionSchema,
    ageGroups: AgeGroupsSectionSchema,
    technology: TechnologySectionSchema,
    serviceList: ServiceListSectionSchema,
    stats: StatsSectionSchema,
    faq: FAQSectionSchema,
    cta: CTASectionSchema,

    // New service-specific sections
    allOnFour: AllOnFourSectionSchema,
    seniors: SeniorsSectionSchema,
    treatments: TreatmentsSectionSchema,
    treatmentBenefits: TreatmentBenefitsSectionSchema,
    approach: ApproachSectionSchema,
    whenNeeded: WhenNeededSectionSchema,
    results: ResultsSectionSchema,
    veneerBenefits: VeneerBenefitsSectionSchema,
    care: CareSectionFullSchema,
    importance: ImportanceSectionSchema,
    offerings: OfferingsSectionSchema,
    suitability: SuitabilitySectionSchema,
    getStarted: GetStartedSectionSchema,
    partialBenefits: PartialBenefitsSectionSchema,
    services: ServicesSectionSchema,

    // Custom sections (admin can add/remove)
    customSections: [CustomSectionSchema],

    // Custom components from templates (drag-drop reorderable)
    customComponents: [{
      id: { type: String, required: true },
      type: { type: String, required: true },
      data: { type: mongoose.Schema.Types.Mixed, default: {} },
      style: { type: mongoose.Schema.Types.Mixed, default: {} },
      enabled: { type: Boolean, default: true },
      order: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
    }],

    // Unified order - stores both section names and component IDs in display order
    // e.g., ["hero", "introduction", "template-123", "benefits", "template-456", "cta"]
    unifiedOrder: [{ type: String }],

    // Section order (array of section names in display order) - DEPRECATED, use unifiedOrder
    sectionOrder: [
      {
        type: String,
        enum: [
          "hero",
          "introduction",
          "benefits",
          "features",
          "process",
          "whatToExpect",
          "types",
          "comparison",
          "tips",
          "aftercare",
          "ageGroups",
          "technology",
          "serviceList",
          "stats",
          "faq",
          "cta",
          // New service-specific sections
          "allOnFour",
          "seniors",
          "treatments",
          "treatmentBenefits",
          "approach",
          "whenNeeded",
          "results",
          "veneerBenefits",
          "care",
          "importance",
          "offerings",
          "suitability",
          "getStarted",
          "partialBenefits",
          "services",
          "custom", // Custom sections will be identified by their sectionId
        ],
      },
    ],

    // SEO
    seo: SEOSchema,

    // Timestamps
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    publishedAt: { type: Date },

    // Version tracking
    version: { type: Number, default: 1 },

    // Admin tracking
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Indexes
StaticServicePageSchema.index({ serviceKey: 1, status: 1 });
StaticServicePageSchema.index({ category: 1, status: 1 });
StaticServicePageSchema.index({ slug: 1 });

// Pre-save middleware
StaticServicePageSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  if (
    this.isModified("status") &&
    this.status === "published" &&
    !this.publishedAt
  ) {
    this.publishedAt = new Date();
  }
  next();
});

// Virtual for checking if page is published
StaticServicePageSchema.virtual("isPublished").get(function () {
  return this.status === "published";
});

// Method to get enabled sections in order
StaticServicePageSchema.methods.getEnabledSections = function () {
  const allSections = [
    "hero",
    "introduction",
    "benefits",
    "features",
    "process",
    "whatToExpect",
    "types",
    "comparison",
    "tips",
    "aftercare",
    "ageGroups",
    "technology",
    "serviceList",
    "stats",
    "faq",
    "cta",
  ];

  const order =
    this.sectionOrder && this.sectionOrder.length > 0
      ? this.sectionOrder
      : allSections;

  return order.filter((sectionName) => {
    if (sectionName === "custom") {
      return this.customSections && this.customSections.some((s) => s.enabled);
    }
    return this[sectionName] && this[sectionName].enabled;
  });
};

// Static method to get all service keys
StaticServicePageSchema.statics.getServiceKeys = function () {
  return [
    "emergency-dentistry",
    "dental-exams-cleanings",
    "family-dentistry",
    "kids-dentistry",
    "tooth-extractions",
    "dental-fillings",
    "dental-sealants",
    "nitrous-sedation",
    "night-guards",
    "dental-bonding",
    "dental-crowns",
    "dental-bridges",
    "dental-implants",
    "partial-dentures",
    "tmj-consult",
    "root-canal-therapy",
    "teeth-whitening",
    "dental-veneers",
    "clear-aligners",
  ];
};

// Static method to get display names mapping
StaticServicePageSchema.statics.getDisplayNames = function () {
  return {
    "emergency-dentistry": "Emergency Dentistry",
    "dental-exams-cleanings": "Dental Exams & Cleanings",
    "family-dentistry": "Family Dentistry",
    "kids-dentistry": "Kids Dentistry",
    "tooth-extractions": "Tooth Extractions",
    "dental-fillings": "Dental Fillings",
    "dental-sealants": "Dental Sealants",
    "nitrous-sedation": "Nitrous Sedation",
    "night-guards": "Night Guards",
    "dental-bonding": "Dental Bonding",
    "dental-crowns": "Dental Crowns",
    "dental-bridges": "Dental Bridges",
    "dental-implants": "Dental Implants",
    "partial-dentures": "Partial Dentures",
    "tmj-consult": "TMJ Consult",
    "root-canal-therapy": "Root Canal Therapy",
    "teeth-whitening": "Teeth Whitening",
    "dental-veneers": "Dental Veneers",
    "clear-aligners": "Clear Aligners",
  };
};

module.exports = mongoose.model("StaticServicePage", StaticServicePageSchema);
