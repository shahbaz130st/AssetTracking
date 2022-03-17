// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class IT_Asset_Inventory extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   IT_Asset_Inventory.init({
//     inventory_date: DataTypes.DATE,
//     number_assigned: DataTypes.INTEGER,
//     number_in_stock: DataTypes.INTEGER,
//     other_details: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'IT_Asset_Inventory',
//   });
//   return IT_Asset_Inventory;
// };
'use strict'
module.exports = function (sequelize, DataTypes) {
  var IT_Asset_Inventory = sequelize.define('IT_Asset_Inventory', {
    inventory_date: DataTypes.DATE,
    number_assigned: DataTypes.INTEGER,
    number_in_stock: DataTypes.INTEGER,
    other_details: DataTypes.STRING
  });
  IT_Asset_Inventory.associate = function (models) {
    IT_Asset_Inventory.belongsTo(models.IT_Assets, {
      foreignKey: "asset_id",
      onDelete: "CASCADE"
    });
  }
  return IT_Asset_Inventory;
}