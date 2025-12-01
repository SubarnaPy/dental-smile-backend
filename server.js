require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");

// Import routes
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blogs");
const formRoutes = require("./routes/forms");
const servicePageRoutes = require("./routes/servicePages");
const serviceTemplateRoutes = require("./routes/serviceTemplates");
const advancedTemplatesRoutes = require("./routes/advancedTemplates");
const publicServicesRoutes = require("./routes/publicServices");
const uploadRoutes = require("./routes/uploads");
const adminImportTemplates = require("./routes/adminImportTemplates");
const emergencyDentistryRoutes = require("./routes/emergencyDentistry");
const dentalExamsRoutes = require("./routes/dentalExams");
const familyDentistryRoutes = require("./routes/familyDentistry");
const kidsDentistryRoutes = require("./routes/kidsDentistry");
const toothExtractionsRoutes = require("./routes/toothExtractions");
const dentalFillingsRoutes = require("./routes/dentalFillings");
const dentalCrownsRoutes = require("./routes/dentalCrowns");
const dentalBridgesRoutes = require("./routes/dentalBridges");
const dentalImplantsRoutes = require("./routes/dentalImplants");
const dentalVeneersRoutes = require("./routes/dentalVeneers");
const dentalBondingRoutes = require("./routes/dentalBonding");
const teethWhiteningRoutes = require("./routes/teethWhitening");
const clearAlignersRoutes = require("./routes/clearAligners");
const rootCanalTherapyRoutes = require("./routes/rootCanalTherapy");
const dentalSealsRoutes = require("./routes/dentalSeals");
const nitrousSedationRoutes = require("./routes/nitrousSedation");
const nightGuardsRoutes = require("./routes/nightGuards");
const partialDenturesRoutes = require("./routes/partialDentures");
const tmjConsultRoutes = require("./routes/tmjConsult");
const staticServicesRoutes = require("./routes/staticServices");
const serviceCategoriesRoutes = require("./routes/serviceCategories");
const formSubmissionsRoutes = require("./routes/formSubmissions");

const app = express();

// Connect to database
console.log("Connecting to database...");
connectDB()
  .then(() => {
    console.log("Database connected successfully");

    // Security middleware
    console.log("Setting up middleware...");
    app.use(helmet());
    app.use(
      cors({
        origin: [
          "https://dentalesmails.netlify.app",
          "https://dentalesmails-admin.netlify.app",
          "http://localhost:3000",
          "http://localhost:5173",
          "http://localhost:8080",
          "http://localhost:8081",
        ],
        credentials: true,
      }),
    );

    // Rate limiting
    // app.use("/api/", apiLimiter);
    console.log("Rate limiting set up");

    // Body parsing middleware
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ extended: true, limit: "10mb" }));

    // Static files
    app.use("/uploads", express.static("uploads"));

    // Health check
    app.get("/health", (req, res) => {
      res.json({
        success: true,
        message: "Server is running",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
      });
    });

    // API routes
    console.log("Setting up routes...");
    app.use("/api/auth", authRoutes);
    app.use("/api/blogs", blogRoutes);
    app.use("/api/forms", formRoutes);
    app.use("/api/service-pages", servicePageRoutes);
    app.use("/api/services", publicServicesRoutes);
    app.use("/api/service-templates", serviceTemplateRoutes);
    app.use("/api/advanced-templates", advancedTemplatesRoutes);
    app.use("/api/uploads", uploadRoutes);
    app.use("/api/admin/import-templates", adminImportTemplates);
    app.use("/api/emergency-dentistry", emergencyDentistryRoutes);
    app.use("/api/dental-exams", dentalExamsRoutes);
    app.use("/api/family-dentistry", familyDentistryRoutes);
    app.use("/api/kids-dentistry", kidsDentistryRoutes);
    app.use("/api/tooth-extractions", toothExtractionsRoutes);
    app.use("/api/dental-fillings", dentalFillingsRoutes);
    app.use("/api/dental-crowns", dentalCrownsRoutes);
    app.use("/api/dental-bridges", dentalBridgesRoutes);
    app.use("/api/dental-implants", dentalImplantsRoutes);
    app.use("/api/dental-veneers", dentalVeneersRoutes);
    app.use("/api/dental-bonding", dentalBondingRoutes);
    app.use("/api/teeth-whitening", teethWhiteningRoutes);
    app.use("/api/clear-aligners", clearAlignersRoutes);
    app.use("/api/root-canal-therapy", rootCanalTherapyRoutes);
    app.use("/api/dental-sealants", dentalSealsRoutes);
    app.use("/api/nitrous-sedation", nitrousSedationRoutes);
    app.use("/api/night-guards", nightGuardsRoutes);
    app.use("/api/partial-dentures", partialDenturesRoutes);
    app.use("/api/tmj-consult", tmjConsultRoutes);
    app.use("/api/static-services", staticServicesRoutes);
    app.use("/api/service-categories", serviceCategoriesRoutes);
    app.use("/api/form-submissions", formSubmissionsRoutes);
    console.log("Routes set up");

    // 404 handler
    app.use("*", (req, res) => {
      res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
      });
    });

    // Error handling middleware (must be last)
    app.use(errorHandler);
    console.log("Error handler set up");

    const PORT = process.env.PORT || 5000;

    console.log(`Attempting to start server on port ${PORT}...`);
    const server = app
      .listen(PORT, () => {
        console.log(
          `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`,
        );
      })
      .on("error", (err) => {
        console.error("Server failed to start:", err.message);
        process.exit(1);
      });

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err, promise) => {
      console.log(`Error: ${err.message}`);
      // Close server & exit process
      server.close(() => {
        process.exit(1);
      });
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (err) => {
      console.log(`Error: ${err.message}`);
      console.log("Shutting down the server due to Uncaught Exception");
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

module.exports = app;
