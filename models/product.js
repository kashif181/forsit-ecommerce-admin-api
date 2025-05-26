'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    tableName: 'products',
    underscored: true
  });

  Product.associate = function(models) {
    Product.hasOne(models.Inventory, { foreignKey: 'product_id', onDelete: 'CASCADE' });
    Product.hasMany(models.Sale, { foreignKey: 'product_id', onDelete: 'CASCADE' });
  };

  return Product;
};
