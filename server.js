const express = require('express');
const connectDB = require('./config/db');
const articleRoutes = require('./src/routes/articleRoutes');
const authRoutes = require('./src/routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const path = require("path")


const app = express();

// Middleware
app.use(express.json()); 

// Connect to MongoDB
connectDB();

// Load environment variables
require('dotenv').config();

const swaggerDocument = require(path.join(__dirname, 'swagger.json'));
// Use Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/auth', authRoutes)

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
