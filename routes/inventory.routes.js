const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Inventory status' });
});

module.exports = router;
