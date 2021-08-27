const User = require("./User");
const Travel = require("./Travel");
<<<<<<< HEAD
const Recipes = require("./Recipe");
const Expierence = require("./Expierence");
=======
const Recipe = require("./Recipe");
const Experience = require("./Experience");
>>>>>>> main

User.hasMany(Travel, {
  foreignKey: "user_id",
});

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

<<<<<<< HEAD
User.hasMany(Experiences, {
  foreignKey: "travel_id",
});

module.exports = { User, Travel, Recipes, Experience };
=======
User.hasMany(Experience, {
  foreignKey: "user_id",
});

Experience.belongsTo(User, { foreignKey: "user_id" });

Recipe.belongsTo(User, { foreignKey: "user_id" });

Travel.belongsTo(User, { foreignKey: "user_id" });

module.exports = { User, Travel, Recipe, Experience };
>>>>>>> main
