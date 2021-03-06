module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define("Students",{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      key: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Students;
}