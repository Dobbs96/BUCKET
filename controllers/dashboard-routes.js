const router = require("express").Router();
const { Experience, Recipe, Travel, User, Comment } = require("../models");

// router.get("/", (req, res) => res.send("Hello Dashboard"));
router.get("/", async (req, res) => {
  const experienceData = await Experience.findAll({
    where: {
      user_id: req.session.userId,
    },
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  }).catch((err) => res.status(500).json(err));
  const recipeData = await Recipe.findAll({
    where: {
      user_id: req.session.userId,
    },
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  }).catch((err) => res.status(500).json(err));
  const travelData = await Travel.findAll({
    where: {
      user_id: req.session.userId,
    },
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  }).catch((err) => res.status(500).json(err));

  const experiences = await experienceData.map((experience) =>
    experience.get({ plain: true })
  );
  const recipes = await recipeData.map((recipe) => recipe.get({ plain: true }));
  const travels = await travelData.map((travel) => travel.get({ plain: true }));

  console.log("inside dashboard-routes.js get / ");
  res.render("home", {
    experiences,
    recipes,
    travels,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
