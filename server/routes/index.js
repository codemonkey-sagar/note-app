const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes
 */
router.get('/', mainController.indexPage);
router.get('/about', mainController.aboutPage);
router.get('/features', mainController.featuresPage);
router.get('/faq', mainController.faqPage);

module.exports = router;
