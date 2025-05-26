'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'inventory',
    underscored: true
  });

  Inventory.associate = function(models) {
    Inventory.belongsTo(models.Product, { foreignKey: 'product_id' });
  };

  return Inventory;
};
