const router = require("express").Router();
const { Travel, User } = require("../../models");

// These are for: /api/travel endpoint

router.get("/", async (req, res) => {
  // find all Travel
  // be sure to include its associated User
  const travelData = await Travel.findAll({
    include: [{ model: User }],
  });
  res.json(travelData);
});

router.post("/", async (req, res) => {
  // create a new Travel
  const newTravel = await Travel.create(req.body).catch((err) =>
    res.status(500).json(err.message)
  );
  res.status(200).json(newTravel);
});

router.put("/:id", async (req, res) => {
  // update a Travel by its `id` value
  const updateTravelData = await Travel.update(req.body, {
    where: { id: req.params.id },
  }).catch((err) => res.status(500).json(err));
  if (!updateTravelData[0]) {
    return res.status(404).json({
      error_message: `No update done since Travel ID ${req.params.id} doesn't exist. Please double check your Travel ID.`,
    });
  }
  res.status(200).json({ message: "Your Travel was updated successfuly." });
});

router.delete("/:id", async (req, res) => {
  // delete a Travel by its "id" value
  const deletedTravel = await Travel.destroy({
    where: { id: req.params.id },
  });
  if (!deletedTravel) {
    return res.status(404).json({
      error_message: `Cannot be deleted because the Travel with ID ${req.params.id} does not exist.`,
    });
  }
  res
    .status(200)
    .json({ message: "The Travel has successfully been deleted." });
});

module.exports = router;