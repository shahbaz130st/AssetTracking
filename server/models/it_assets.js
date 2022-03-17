// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class IT_Assets extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   IT_Assets.init({
//     description: DataTypes.STRING,
//     other_details: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'IT_Assets',
//   });
//   return IT_Assets;
// };
'use strict'
module.exports = function (sequelize, DataTypes) {
  var IT_Assets = sequelize.define('IT_Assets', {
    description: DataTypes.STRING,
    other_details: DataTypes.STRING
  });
  IT_Assets.associate = function (models) {
    IT_Assets.hasMany(models.Employee_Assets, {
      foreignKey: "asset_id",
      as: "employee_assets"
    });
    IT_Assets.belongsTo(models.Asset_Types, {
      foreignKey: "asset_type_code",
      onDelete: "CASCADE"
    });
    IT_Assets.hasMany(models.IT_Asset_Inventory, {
      foreignKey: "asset_id",
      as: "it_asset_inventory"
    });
  };
  return IT_Assets;
}