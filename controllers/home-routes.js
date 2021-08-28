const router = require("express").Router();
const { Experience, Recipe, Travel, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  // find all Experience
  const experienceData = await Experience.findAll({
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  }).catch((err) => res.status(500).json(err));
  const recipeData = await Recipe.findAll({
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  }).catch((err) => res.status(500).json(err));
  const travelData = await Travel.findAll({
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
router.get("/login", (req, res) => res.render("login"));
router.get("/signup", (req, res) => res.render("signup"));
router.get("/dashboard", (req, res) => res.render("dashboard"));

module.exports = router;
