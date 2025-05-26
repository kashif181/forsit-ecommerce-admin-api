const { Op, fn, col, literal } = require('sequelize');
const { Sale, Product } = require('../models');

exports.getSales = async (req, res) => {
  try {
    const { start, end, category, productId } = req.query;

    const where = {};
    if (start && end) where.sale_date = { [Op.between]: [new Date(start), new Date(end)] };
    if (category) where.category = category;
    if (productId) where.product_id = productId;

    const sales = await Sale.findAll({ where, include: Product });
    res.status(200).json(sales);
  } catch (err) {
    console.error('Error fetching sales:', err);
    res.status(500).json({ error: 'Failed to fetch sales' });
  }
};

exports.analyzeRevenue = async (req, res) => {
  try {
    const { period = 'daily' } = req.query;

    let dateTrunc;
    switch (period) {
      case 'weekly': dateTrunc = 'week'; break;
      case 'monthly': dateTrunc = 'month'; break;
      case 'yearly': dateTrunc = 'year'; break;
      default: dateTrunc = 'day';
    }

    const revenue = await Sale.findAll({
      attributes: [
        [fn('date_trunc', dateTrunc, col('sale_date')), 'period'],
        [fn('sum', col('total_price')), 'total_revenue']
      ],
      group: [literal('period')],
      order: [literal('period ASC')]
    });

    res.status(200).json(revenue);
  } catch (err) {
    console.error('Error analyzing revenue:', err);
    res.status(500).json({ error: 'Failed to analyze revenue' });
  }
};

exports.compareRevenue = async (req, res) => {
  try {
    const comparison = await Sale.findAll({
      attributes: [
        'category',
        [fn('sum', col('total_price')), 'total_revenue']
      ],
      group: ['category']
    });

    res.status(200).json(comparison);
  } catch (err) {
    console.error('Error comparing revenue:', err);
    res.status(500).json({ error: 'Failed to compare revenue' });
  }
};
