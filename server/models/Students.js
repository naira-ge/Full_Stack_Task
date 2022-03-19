module.exports = (sequelize, DataTypes) => {

  const Students = sequelize.define('Students', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    userFullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentGroup: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Students;
}