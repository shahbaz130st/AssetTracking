module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    other_details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Employees.associate = (models) => {
    Employees.hasMany(models.Employee_Assets, {
      foreignKey: 'employee_id',
      as: 'employee_assets',
    });
  };
  return Employees;
};