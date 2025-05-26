const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controller');

router.get('/', salesController.getSales);
router.get('/revenue', salesController.analyzeRevenue);
router.get('/compare', salesController.compareRevenue);

module.exports = router;