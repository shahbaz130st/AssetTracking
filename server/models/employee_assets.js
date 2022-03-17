// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Employee_Assets extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Employee_Assets.init({
//     date_out: DataTypes.DATE,
//     date_returned: DataTypes.DATE,
//     condition_out: DataTypes.STRING,
//     condition_returned: DataTypes.STRING,
//     other_details: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Employee_Assets',
//   });
//   return Employee_Assets;
// };
'use strict'
module.exports = function (sequelize, DataTypes) {
  var Employee_Assets = sequelize.define('Employee_Assets', {
    date_returned: DataTypes.DATE,
    condition_out: DataTypes.STRING,
    condition_returned: DataTypes.STRING,
    other_details: DataTypes.STRING
  });
  Employee_Assets.associate = function (models) {
    Employee_Assets.belongsTo(models.Employees, {
      foreignKey: "employee_id",
      onDelete: "CASCADE"
    });
    Employee_Assets.belongsTo(models.IT_Assets, {
      foreignKey: "asset_id",
      onDelete: "CASCADE"
    });
  };
  return Employee_Assets;
}