'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'LED TV',
        category: 'Electronics',
        price: 499.99,
        created_at: new Date()
      },
      {
        name: 'Washing Machine',
        category: 'Appliances',
        price: 299.99,
        created_at: new Date()
      },
      {
        name: 'Smartphone',
        category: 'Electronics',
        price: 699.99,
        created_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
