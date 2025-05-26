'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        product_id: 1,
        quantity: 2,
        total_price: 999.98,
        sale_date: new Date()
      },
      {
        product_id: 2,
        quantity: 1,
        total_price: 299.99,
        sale_date: new Date()
      },
      {
        product_id: 3,
        quantity: 3,
        total_price: 2099.97,
        sale_date: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
