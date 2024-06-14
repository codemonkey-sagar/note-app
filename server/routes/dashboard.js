const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

/**
 * Dashboard Routes
 */
router.get('/', dashboardController.dashboard);

module.exports = router;
