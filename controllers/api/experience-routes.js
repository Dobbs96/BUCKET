const router = require("express").Router();

router.get("/", (req, res) => res.send("Hello experience"));

module.exports = router;

router.get("/", async (req, res) => {
  // find all Experience
  // be sure to include its associated User
  const ExperienceData = await Experience.findAll({
    include: [{ model: User }],
  });
  res.json(experienceData);
});

router.post("/", async (req, res) => {
  // create a new Experience
  const newExperience = await Experience.create(req.body).catch((err) =>
    res.status(500).json(err.message)
  );
  res.status(200).json(newExperience);
});

router.put("/:id", async (req, res) => {
  // update a Experience by its `id` value
  const updateExperienceData = await Experience.update(req.body, {
    where: { id: req.params.id },
  }).catch((err) => res.status(500).json(err));
  if (!updateExperienceData[0]) {
    return res.status(404).json({
      error_message: `No update done since Experience ID ${req.params.id} doesn't exist. Please double check your Experience ID.`,
    });
  }
  res.status(200).json({ message: "Your Experience was updated successfuly." });
});

router.delete("/:id", async (req, res) => {
  // delete a Experience by its "id" value
  const deletedExperience = await Experience.destroy({
    where: { id: req.params.id },
  });
  if (!deletedExperience) {
    return res.status(404).json({
      error_message: `Cannot be deleted because the Experience with ID ${req.params.id} does not exist.`,
    });
  }
  res
    .status(200)
    .json({ message: "The Experience has successfully been deleted." });
});

module.exports = router;
