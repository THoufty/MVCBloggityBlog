const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      alowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
