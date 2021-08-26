const User = require("./User");
const Destination = require("./Travel");
const Recipes = require("./Recipe");
const Newexpierences = require("./Newexpierences");

User.hasMany(Destinations, {
  foreignKey: "travel_id",
});

User.hasMany(Recipes, {
  foreignKey: "travel_id",
});

User.hasMany(Newexperiences, {
  foreignKey: "travel_id",
});

module.exports = { User, Destination, Recipes, Experience };
