const router = require("express").Router();
const { Travel, User } = require("../../models");

// These are for: /api/travel endpoint

router.get("/", async (req, res) => {
  // find all Travel
  // be sure to include its associated User
  const travelData = await Travel.findAll({
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  });
  res.json(travelData);
});

router.post("/", async (req, res) => {
  // create a new Travel
  let { location, budget, description, starting_date, ending_date } = req.body;
  const newTravel = await Travel.create({
    location,
    budget,
    what_do: description,
    starting_date,
    ending_date,
    user_id: req.session.userId,
  }).catch((err) => res.status(500).json(err.message));
  res.redirect("/dashboard");
});

router.put("/:id", async (req, res) => {
  console.log("inside travel-routes ------");
  console.log("req.params.id", req.params.id);
  console.log(req.body);
  // update a Travel by its `id` value
  const updateTravelData = await Travel.update(req.body, {
    where: { id: req.params.id },
    // let { location, budget, what_do, starting_date, ending_date } = req.body;
    // const newTravel = await Travel.update({
    //   where: { id: req.params.id },
    //   location,
    //   budget,
    //   what_do,
    //   starting_date,
    //   ending_date,
  }).catch((err) => res.status(500).json(err));
  if (!updateTravelData[0]) {
    return res.status(404).json({
      error_message: `No update done since Travel ID ${req.params.id} doesn't exist. Please double check your Travel ID.`,
    });
  }
  res.status(200).json({ message: "Your Travel was updated successfuly." });
  //res.redirect("/dashboard");
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
