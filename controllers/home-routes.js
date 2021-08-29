const router = require("express").Router();
const { Experience, Recipe, Travel, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  // find all Experience
  const experienceData = await Experience.findAll({
    include: [
      {
        model: Comment,
      },
      { model: User, attributes: { exclude: ["password"] } },
    ],
  }).catch((err) => res.status(500).json(err));

  const recipeData = await Recipe.findAll({
    include: [
      { model: Comment },
      { model: User, attributes: { exclude: ["password"] } },
    ],
  }).catch((err) => res.status(500).json(err));

  const travelData = await Travel.findAll({
    include: [
      { model: Comment },
      { model: User, attributes: { exclude: ["password"] } },
    ],
  }).catch((err) => res.status(500).json(err));

  const experiences = await experienceData.map((experience) =>
    experience.get({ plain: true })
  );
  const recipes = await recipeData.map((recipe) => recipe.get({ plain: true }));
  const travels = await travelData.map((travel) => travel.get({ plain: true }));
  //console.log(travels);
  res.render("home", {
    experiences,
    recipes,
    travels,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/travel/:id", async (req, res) => {
  try {
    const travelData = await Travel.findAll({
      where: { id: req.params.id },
      include: [
        Comment,
        { model: User, attributes: { exclude: ["password"] } },
      ],
      attributes: { exclude: ["password"] },
    });
    if (!travelData)
      return res
        .status(400)
        .json({ message: `There is no travel by the ID of ${req.params.id}` });
    const travels = await travelData.map((travel) =>
      travel.get({ plain: true })
    );
    res.render("travel", { travels });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/experience/:id", async (req, res) => {
  try {
    const experienceData = await Experience.findAll({
      where: { id: req.params.id },
      include: [
        Comment,
        { model: User, attributes: { exclude: ["password"] } },
      ],
      attributes: { exclude: ["password"] },
    });
    if (!experienceData)
      return res.status(400).json({
        message: `There is no experience by the ID of ${req.params.id}`,
      });
    const experiences = await experienceData.map((experience) =>
      experience.get({ plain: true })
    );
    res.render("experience", { experiences });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/recipe/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: { id: req.params.id },
      include: [
        Comment,
        { model: User, attributes: { exclude: ["password"] } },
      ],
      attributes: { exclude: ["password"] },
    });
    if (!recipeData)
      return res
        .status(400)
        .json({ message: `There is no travel by the ID of ${req.params.id}` });
    const recipes = await recipeData.map((recipe) =>
      recipe.get({ plain: true })
    );
    res.render("recipe", { recipes });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/signup", (req, res) => res.render("signup"));

module.exports = router;
