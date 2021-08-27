const User = require("./User");
const Travel = require("./Travel");
const Recipes = require("./Recipe");
const Expierence = require("./Expierence");

User.hasMany(Destinations, {
  foreignKey: "travel_id",
});

User.hasMany(Recipes, {
  foreignKey: "travel_id",
});

User.hasMany(Experiences, {
  foreignKey: "travel_id",
});

module.exports = { User, Travel, Recipes, Experience };
