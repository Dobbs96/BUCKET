const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Travel extends Model {}

Travel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    what_do: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ending_date: {
      type: DataTypes.DATE,
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
    modelName: "travel",
  }
);

module.exports = Travel;
