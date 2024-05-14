const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleControllers');

// GET /api/articles - Get all articles with filters
router.get('/articles', articleController.getArticles);

// GET /api/articles/:id - Get a single article by ID
router.get('/articles/:id', articleController.getArticleById);

// POST /api/articles - Create a new article
router.post('/articles', articleController.createArticle);

// PUT /api/articles/:id - Update an existing article
router.put('/articles/:id', articleController.updateArticle);

// DELETE /api/articles/:id - Delete an article
router.delete('/articles/:id', articleController.deleteArticle);

module.exports = router;
