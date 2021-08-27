const User = require("./User");
const Travel = require("./Travel");
const Recipe = require("./Recipe");
const Experience = require("./Experience");
const Comment = require("./Comment");

User.hasMany(Travel, {
  foreignKey: "user_id",
});

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

User.hasMany(Experience, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Experience.hasMany(Comment, {
  foreignKey: "experience_id",
});

Travel.hasMany(Comment, {
  foreignKey: "travel_id",
});

Recipe.hasMany(Comment, {
  foreignKey: "recipe_id",
});

Experience.belongsTo(User, { foreignKey: "user_id" });

Recipe.belongsTo(User, { foreignKey: "user_id" });

Travel.belongsTo(User, { foreignKey: "user_id" });

Comment.belongsTo(User, { foreignKey: "user_id" });

Comment.belongsTo(Experience, { foreignKey: "experience_id" });

Comment.belongsTo(Travel, { foreignKey: "travel_id" });

Comment.belongsTo(Recipe, { foreignKey: "recipe_id" });

module.exports = { User, Travel, Recipe, Experience, Comment };
