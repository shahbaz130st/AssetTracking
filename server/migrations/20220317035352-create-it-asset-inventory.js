'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IT_Asset_Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inventory_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      number_assigned: {
        type: Sequelize.INTEGER
      },
      number_in_stock: {
        type: Sequelize.INTEGER
      },
      other_details: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      asset_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'IT_Assets',
          key: 'id',
          as: 'asset_id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IT_Asset_Inventories');
  }
};