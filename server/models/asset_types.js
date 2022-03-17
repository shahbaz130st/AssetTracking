// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Asset_Types extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Asset_Types.init({
//     asset_type_description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Asset_Types',
//   });
//   return Asset_Types;
// };
'use strict'
module.exports = function (sequelize, DataTypes) {
  var Asset_Types = sequelize.define('Asset_Types', {
    asset_type_description: DataTypes.STRING
  });
  Asset_Types.associate = function (models) {
    Asset_Types.hasMany(models.IT_Assets, {
      foreignKey: "asset_type_code",
      as: "it_assets"
    });
  };
  return Asset_Types;
}