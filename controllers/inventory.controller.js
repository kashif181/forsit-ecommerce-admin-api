const { Inventory, Product } = require('../models');

exports.getInventory = async (req, res) => {
  try {
    const items = await Inventory.findAll({ include: Product });
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching inventory:', err);
    res.status(500).json({ error: 'Failed to fetch inventory' });
  }
};

exports.getLowStock = async (req, res) => {
  try {
    const items = await Inventory.findAll({
      where: { stock_level: { [require('sequelize').Op.lt]: 10 } },
      include: Product
    });
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching low stock:', err);
    res.status(500).json({ error: 'Failed to fetch low stock items' });
  }
};

exports.updateStock = async (req, res) => {
  try {
    const { stock_level } = req.body;
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) return res.status(404).json({ error: 'Inventory not found' });

    inventory.stock_level = stock_level;
    await inventory.save();

    res.status(200).json(inventory);
  } catch (err) {
    console.error('Error updating stock:', err);
    res.status(500).json({ error: 'Failed to update stock' });
  }
};
