const User = require("./User");
const Travel = require("./Travel");
const Recipe = require("./Recipe");
const Experience = require("./Experience");

User.hasMany(Travel, {
  foreignKey: "user_id",
});

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

User.hasMany(Experience, {
  foreignKey: "user_id",
});

Experience.belongsTo(User, { foreignKey: "user_id" });

Recipe.belongsTo(User, { foreignKey: "user_id" });

Travel.belongsTo(User, { foreignKey: "user_id" });

module.exports = { User, Travel, Recipe, Experience };
