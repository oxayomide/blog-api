const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb+srv://olaolu:admin@blog-api.kcn9a9w.mongodb.net/?retryWrites=true&w=majority&appName=blog-api'; // Replace with your MongoDB URI

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
