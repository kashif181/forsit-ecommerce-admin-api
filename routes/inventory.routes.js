const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory.controller');

router.get('/', inventoryController.getInventory);
router.get('/low', inventoryController.getLowStock);
router.put('/:id', inventoryController.updateStock);

module.exports = router;