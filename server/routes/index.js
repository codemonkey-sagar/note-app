const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes
 */
router.get('/', mainController.indexPage);
router.get('/about', mainController.aboutPage);

module.exports = router;
