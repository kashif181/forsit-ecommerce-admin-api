const { Product } = require('../models')

exports.createProduct = async (req, res) => {
  try {
    const { name, category, price } = req.body;
    const product = await Product.create({ name, category, price });
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    console.error('ERROR in getAllProducts:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
