'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('inventory', [
      {
        product_id: 1,
        stock_level: 10,
        updated_at: new Date()
      },
      {
        product_id: 2,
        stock_level: 5,
        updated_at: new Date()
      },
      {
        product_id: 3,
        stock_level: 15,
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('inventory', null, {});
  }
};
