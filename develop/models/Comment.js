const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "post",
          key: "id",
          unique: false
        }
      },    
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "user",
        key: "id",
        unique: false
      }
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
