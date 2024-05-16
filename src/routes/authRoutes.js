const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authControllers');

// POST /api/auth/register - Register a new user
router.post('/register', register);

// POST /api/auth/login - Login user and return token
router.post('/login', login);

module.exports = router;
