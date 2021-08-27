const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "user", key: "id" },
    },
    experience_id: {
      type: DataTypes.INTEGER,
      references: { model: "experience", key: "id" },
    },
    travel_id: {
      type: DataTypes.INTEGER,
      references: { model: "travel", key: "id" },
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: { model: "recipe", key: "id" },
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
