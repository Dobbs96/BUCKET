const router = require("express").Router();
const { Experience, Recipe, Travel, User } = require("../../models");

router.get("/", async (req, res) => {
  // find all recipe
  // be sure to include its associated User
  const recipeData = await Recipe.findAll({
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  });
  res.json(recipeData);
});

router.post("/", async (req, res) => {
  // create a new Recipe
  let { name, link, price } = req.body;

  const newRecipe = await Recipe.create({ name, link, price }).catch((err) =>
    res.status(500).json(err.message)
  );
  res.redirect("/dashboard");
});

router.put("/:id", async (req, res) => {
  // update a Recipe by its `id` value
  const updateRecipeData = await Recipe.update(req.body, {
    where: { id: req.params.id },
  }).catch((err) => res.status(500).json(err));
  if (!updateRecipeData[0]) {
    return res.status(404).json({
      error_message: `No update done since Recipe ID ${req.params.id} doesn't exist. Please double check your Recipe ID.`,
    });
  }
  res.status(200).json({ message: "Your Recipe was updated successfuly." });
});

router.delete("/:id", async (req, res) => {
  // delete a Recipe by its "id" value
  const deletedRecipe = await Recipe.destroy({
    where: { id: req.params.id },
  });
  if (!deletedRecipe) {
    return res.status(404).json({
      error_message: `Cannot be deleted because the Recipe with ID ${req.params.id} does not exist.`,
    });
  }
  res
    .status(200)
    .json({ message: "The Recipe has successfully been deleted." });
});

module.exports = router;
