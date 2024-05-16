const express = require('express');
const connectDB = require('./config/db');
const articleRoutes = require('./src/routes/articleRoutes');
const authRoutes = require('./src/routes/authRoutes');
const authMiddleware = require('./src/middleware/authMiddleware');

const app = express();

// Middleware
app.use(express.json()); 

// Connect to MongoDB
connectDB();

// Load environment variables
require('dotenv').config();


// Routes
app.use('/api/articles', authMiddleware, articleRoutes);
app.use('/api/auth', authRoutes)

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
