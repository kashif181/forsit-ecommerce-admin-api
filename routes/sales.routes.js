const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Sales data' });
});

module.exports = router;
