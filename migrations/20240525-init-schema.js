'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async up (queryInterface, Sequelize) {
    const sql = fs.readFileSync(
      path.join(__dirname, '../db/create_tables.sql'),
      'utf8'
    );
    return queryInterface.sequelize.query(sql);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
    await queryInterface.dropTable('inventory');
    await queryInterface.dropTable('products');
  }
};
