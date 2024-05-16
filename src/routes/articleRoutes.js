const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleControllers');
const authMiddleware = require('../middleware/authMiddleware');

// GET /api/articles - Get all articles with filters
router.get('/', articleController.getArticles);

// GET /api/articles/:id - Get a single article by ID
router.get('/:id', articleController.getArticleById);

// POST /api/articles - Create a new article
router.post('/', authMiddleware, articleController.validateCreateArticle, articleController.createArticle);

// PUT /api/articles/:id - Update an existing article
router.put('/:id', authMiddleware, articleController.updateArticle);

// DELETE /api/articles/:id - Delete an article
router.delete('/:id', authMiddleware, articleController.deleteArticle);

module.exports = router;
