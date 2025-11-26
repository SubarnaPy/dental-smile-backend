require('dotenv').config();
const connectDB = require('../config/database');
const mongoose = require('mongoose');

const User = require('../models/User');
const Blog = require('../models/Blog');
const Form = require('../models/Form');
const ServicePage = require('../models/ServicePage');
const ServiceTemplate = require('../models/ServiceTemplate');

const run = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB for verification');

    const collections = [
      { name: 'users', model: User },
      { name: 'blogs', model: Blog },
      { name: 'forms', model: Form },
      { name: 'servicepages', model: ServicePage },
      { name: 'servicetemplates', model: ServiceTemplate },
      { name: 'legacyimages', raw: true }
    ];

    for (const col of collections) {
      if (col.raw) {
        // Try to access collection directly
        const exists = await mongoose.connection.db.listCollections({ name: 'legacyimages' }).toArray();
        if (exists.length === 0) {
          console.log(`Collection 'legacyimages' does not exist`);
        } else {
          const count = await mongoose.connection.db.collection('legacyimages').countDocuments();
          const sample = await mongoose.connection.db.collection('legacyimages').find({}).limit(1).toArray();
          console.log(`legacyimages -> count: ${count}`);
          console.log('sample:', sample[0] || null);
        }
        continue;
      }

      const model = col.model;
      const count = await model.countDocuments();
      console.log(`${model.modelName} -> count: ${count}`);
      if (count > 0) {
        const doc = await model.findOne().lean();
        console.log('sample:', doc);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error('Verification failed:', err);
    process.exit(1);
  }
};

run();
