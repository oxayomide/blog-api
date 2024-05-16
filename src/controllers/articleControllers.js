const Article = require('../models/Article');
const { validationResult, body } = require('express-validator');

// Controller functions
const getArticles = async (req, res) => {
  try {
    // To fetch all articles from database
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    // To fetch an article by ID from database
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    console.error('Error fetching article by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createArticle = async (req, res) => {
  // Validate input using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, content, tags } = req.body;
  try {
    // To create a new article
    const article = new Article({ title, content, tags });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Validation middleware for createArticle endpoint
const validateCreateArticle = [
  // Validate title (required, non-empty)
  body('title').notEmpty().withMessage('Title is required'),

  // Validate content (required, non-empty)
  body('content').notEmpty().withMessage('Content is required'),

  // Custom validation for tags (if provided)
  body('tags').optional().isArray().withMessage('Tags must be an array'),

  // Middleware to handle validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;
  try {
    // To update an existing article
    const article = await Article.findByIdAndUpdate(id, { title, content, tags }, { new: true });
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    // To delete an article
    const article = await Article.findByIdAndDelete(id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  validateCreateArticle,
  updateArticle,
  deleteArticle
};
