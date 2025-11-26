require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const mongoose = require('mongoose');
const connectDB = require('../config/database');

// Import models
const User = require('../models/User');
const Blog = require('../models/Blog');
const Form = require('../models/Form');
const ServicePage = require('../models/ServicePage');
const ServiceTemplate = require('../models/ServiceTemplate');

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const migrateData = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('Connected to MongoDB');

    // Map Supabase user identifier -> MongoDB user _id
    const supabaseToMongoUserId = new Map();
    // Dry-run mode: pass --dry-run to node script to only log actions
    const dryRun = process.argv.includes('--dry-run');
    if (dryRun) console.log('Running in DRY-RUN mode. No writes will be performed.');

    // Helper wrappers to either perform DB writes or log the intended action
    const safeCreate = async (Model, doc, desc) => {
      if (dryRun) {
        console.log('[DRY RUN] Create', desc || Model.modelName, doc && (doc.title || doc.email || doc.name || doc.slug || '(doc)'));
        return null;
      }
      return Model.create(doc);
    };

    const safeUpdateById = async (Model, id, update, desc) => {
      if (dryRun) {
        console.log('[DRY RUN] Update', desc || Model.modelName, id, update);
        return null;
      }
      return Model.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    };

    const safeDelete = async (doc, desc) => {
      if (dryRun) {
        console.log('[DRY RUN] Delete', desc || (doc && doc._id));
        return null;
      }
      return doc.deleteOne();
    };

    // Migrate admin profiles to users
    console.log('Migrating admin profiles...');
    const { data: adminProfiles, error: adminError } = await supabase
      .from('admin_profiles')
      .select('*');

    if (adminError) {
      console.error('Error fetching admin profiles:', adminError);
    } else {
      for (const profile of adminProfiles) {
        try {
          const existingUser = await User.findOne({ email: profile.email });
          if (!existingUser) {
            const created = await safeCreate(User, {
              email: profile.email,
              name: profile.name,
              password: '$2a$10$defaultHashedPasswordForMigration', // Default password, should be changed
              role: 'admin'
            });
            console.log(`Migrated user: ${profile.email}`);
            // store mapping from supabase id/user_id to created mongo id
            const key = profile.user_id || profile.id || profile.uid || profile._id;
            if (key) supabaseToMongoUserId.set(key.toString(), created._id);
          } else {
            // existing user -> store mapping
            const key = profile.user_id || profile.id || profile.uid || profile._id;
            if (key) supabaseToMongoUserId.set(key.toString(), existingUser._id);
          }
        } catch (err) {
          console.error(`Error migrating user ${profile.email}:`, err.message);
        }
      }
    }

    // Migrate blogs
    console.log('Migrating blogs...');
    const { data: blogs, error: blogError } = await supabase
      .from('blogs')
      .select('*');

    if (blogError) {
      console.error('Error fetching blogs:', blogError);
    } else {
      for (const blog of blogs) {
        try {
          const existingBlog = await Blog.findOne({ title: blog.title });
          if (!existingBlog) {
            const doc = {
              title: blog.title,
              excerpt: blog.excerpt,
              content: blog.content,
              richTextContent: blog.rich_text_content,
              author: blog.author,
              category: blog.category,
              tags: blog.tags || [],
              image: blog.image,
              featured: blog.featured || false,
              published: blog.published || false,
              date: blog.date ? new Date(blog.date) : new Date(),
              readTime: blog.read_time,
              views: blog.views || 0,
              likes: blog.likes || 0
            };

            // If Supabase stored an author id, map to MongoDB user _id
            const supabaseAuthorKey = blog.user_id || blog.author_id || blog.author_user_id;
            if (supabaseAuthorKey && supabaseToMongoUserId.has(supabaseAuthorKey.toString())) {
              doc.createdBy = supabaseToMongoUserId.get(supabaseAuthorKey.toString());
            }

            const createdBlog = await safeCreate(Blog, doc, 'Blog');
            console.log(`Migrated blog: ${blog.title}`);
          }
        } catch (err) {
          console.error(`Error migrating blog ${blog.title}:`, err.message);
        }
      }
    }

    // Migrate forms
    console.log('Migrating forms...');
    const { data: forms, error: formError } = await supabase
      .from('forms')
      .select('*');

    if (formError) {
      console.error('Error fetching forms:', formError);
    } else {
      for (const form of forms) {
        try {
          const existingForm = await Form.findOne({
            email: form.email,
            createdAt: new Date(form.created_at)
          });
          if (!existingForm) {
            const formDoc = {
              firstName: form.first_name,
              lastName: form.last_name,
              email: form.email,
              phone: form.phone,
              addressLine1: form.address_line1,
              addressLine2: form.address_line2,
              city: form.city,
              province: form.province,
              postalCode: form.postal_code,
              country: form.country,
              gender: form.gender,
              hasInsurance: form.has_insurance,
              preferredDate: form.preferred_date ? new Date(form.preferred_date) : null,
              referralSource: form.referral_source,
              referralName: form.referral_name,
              message: form.message
            };

            // Map assignedTo if Supabase stored a user id
            const supAssigned = form.assigned_to || form.assigned_user_id || form.user_id;
            if (supAssigned && supabaseToMongoUserId.has(supAssigned.toString())) {
              formDoc.assignedTo = supabaseToMongoUserId.get(supAssigned.toString());
            }

            const createdForm = await safeCreate(Form, formDoc, 'Form');
            console.log(`Migrated form: ${form.first_name} ${form.last_name}`);
          }
        } catch (err) {
          console.error(`Error migrating form for ${form.email}:`, err.message);
        }
      }
    }

    // Migrate service pages
    console.log('Migrating service pages...');
    const { data: servicePages, error: pageError } = await supabase
      .from('service_pages')
      .select('*');

    if (pageError) {
      console.error('Error fetching service pages:', pageError);
    } else {
      for (const page of servicePages) {
        try {
          const existingPage = await ServicePage.findOne({ slug: page.slug });
          if (!existingPage) {
            const pageDoc = {
              title: page.title,
              slug: page.slug,
              description: page.description,
              category: page.category,
              image: page.image,
              previewImage: page.preview_image,
              content: page.content,
              status: page.status,
              seo: page.seo,
              themeTokens: page.theme_tokens
            };

            const supCreator = page.created_by || page.user_id || page.author_id;
            if (supCreator && supabaseToMongoUserId.has(supCreator.toString())) {
              pageDoc.createdBy = supabaseToMongoUserId.get(supCreator.toString());
            }

            const createdPage = await safeCreate(ServicePage, pageDoc, 'ServicePage');
            console.log(`Migrated service page: ${page.title}`);
          }
        } catch (err) {
          console.error(`Error migrating service page ${page.title}:`, err.message);
        }
      }
    }

    // Migrate service templates
    console.log('Migrating service templates...');
    const { data: templates, error: templateError } = await supabase
      .from('service_templates')
      .select('*');

    if (templateError) {
      console.error('Error fetching service templates:', templateError);
    } else {
      for (const template of templates) {
        try {
          const existingTemplate = await ServiceTemplate.findOne({ name: template.name });
          if (!existingTemplate) {
            const tmpl = {
              name: template.name,
              description: template.description,
              category: template.category,
              content: template.content,
              previewImage: template.preview_image,
              thumbnailUrl: template.thumbnail_url,
              themeTokens: template.theme_tokens,
              isPremium: template.is_premium || false,
              usageCount: template.usage_count || 0
            };

            const supCreator = template.created_by || template.user_id || template.author_id;
            if (supCreator && supabaseToMongoUserId.has(supCreator.toString())) {
              tmpl.createdBy = supabaseToMongoUserId.get(supCreator.toString());
            }

            const createdTmpl = await safeCreate(ServiceTemplate, tmpl, 'ServiceTemplate');
            console.log(`Migrated template: ${template.name}`);
          }
        } catch (err) {
          console.error(`Error migrating template ${template.name}:`, err.message);
        }
      }
    }

    // Migrate user roles (if separate table)
    console.log('Migrating user roles...');
    const { data: roles, error: rolesError } = await supabase.from('user_roles').select('*');
    if (rolesError) {
      console.error('Error fetching user_roles:', rolesError);
    } else {
      for (const roleRec of roles) {
        try {
          const supKey = roleRec.user_id || roleRec.user || roleRec.id;
          if (!supKey) continue;
          const mongoUserId = supabaseToMongoUserId.get(supKey.toString());
          if (mongoUserId) {
            await safeUpdateById(User, mongoUserId, { role: roleRec.role }, 'User.role');
            console.log(`Assigned role ${roleRec.role} to user ${supKey}`);
          }
        } catch (err) {
          console.error('Error migrating role record:', err.message);
        }
      }
    }

    // Migrate service images/storage records into a lightweight collection
    console.log('Migrating service-images...');
    const { data: images, error: imagesError } = await supabase.from('service-images').select('*');
    if (imagesError) {
      if (imagesError && imagesError.code !== 'PGRST116') {
        console.error('Error fetching service-images:', imagesError);
      }
    } else {
      // Create a simple model for legacy images
      const legacyImageSchema = new mongoose.Schema({
        key: String,
        url: String,
        metadata: mongoose.Schema.Types.Mixed
      }, { timestamps: true });
      const LegacyImage = mongoose.model('LegacyImage', legacyImageSchema);

      for (const img of images) {
        try {
          await safeCreate(LegacyImage, {
            key: img.key || img.id || img.name,
            url: img.url || img.path || img.public_url || img.publicUrl || null,
            metadata: img
          });
          console.log(`Migrated image record: ${img.key || img.id || img.name}`);
        } catch (err) {
          console.error('Error migrating image record:', err.message);
        }
      }
    }

    console.log('Migration completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

// Run migration
migrateData();