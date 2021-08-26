const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Experience extends Model {}

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    what_do: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "user", key: "id" },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "experience",
  }
);

module.exports = Experience;
