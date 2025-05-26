'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    sale_date: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'sales',
    underscored: true
  });

  Sale.associate = function(models) {
    Sale.belongsTo(models.Product, { foreignKey: 'product_id' });
  };

  return Sale;
};
