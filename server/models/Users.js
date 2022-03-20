module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define( "api_users",{
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
  //   Users.hasMany(models.Likes, {
  //     onDelete: "cascade",
  //   });
  // };

  return Users;
};