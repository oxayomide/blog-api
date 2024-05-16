const mongoose = require('mongoose');

require('dotenv').config();

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI; // Replace with your MongoDB URI

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
