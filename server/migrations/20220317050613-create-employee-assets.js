'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employee_Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_out: {
        type: Sequelize.DATE
      },
      date_returned: {
        type: Sequelize.DATE
      },
      condition_out: {
        type: Sequelize.STRING
      },
      condition_returned: {
        type: Sequelize.STRING
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
      },
      employee_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Employees',
          key: 'id',
          as: 'employee_id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employee_Assets');
  }
};