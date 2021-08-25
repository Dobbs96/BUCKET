const sequelize = require("../config/connection");
const { User, Travel, Recipes, Experience } = require("../models");

const userSeedData = require("./userSeedData.json");
const travelSeedData = require("./travelSeedData.json");
const recipesSeedData = require("./recipesSeedData.json");
const experienceSeedData = require("./experienceSeedData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  for (const travel of travelSeedData) {
    const newTravel = await Travel.create({
      ...travel,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const recipe of recipesSeedData) {
    const newRecipe = await Recipes.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const experience of experienceSeedData) {
    const newExperience = await Experience.create({
      ...experience,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedAll();
