module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users",{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // Users.associate = (models) => {
  //   Users.hasMany(models.Students, {
  //     onDelete: "cascade",
  //   });
  // };

  return Users;
};