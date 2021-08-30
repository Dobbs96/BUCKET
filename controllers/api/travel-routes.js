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
  console.log("inside travel-routes.js PUT endpoint");
  console.log(req.params.id);
  console.log(req.body);
  // update a Travel by its `id` value
  const updateTravelData = await Travel.update(
    {
      location: req.body.locationModalData,
      budget: req.body.budgetModalData,
      what_do: req.body.whatDoModalData,
      starting_date: req.body.startingDateModalData,
      ending_date: req.body.endingDateModalData,
    },
    {
      where: { id: req.params.id },
    }
  ).catch((err) => res.status(500).json(err));
  // if (!updateTravelData) {
  //   return res.status(404).json({
  //     error_message: `No update done since Travel ID ${req.params.id} doesn't exist. Please double check your Travel ID.`,
  //   });
  // }
  return res
    .status(200)
    .json({ message: "Your Travel was updated successfuly." })
    .send();
});

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  // delete a Travel by its "id" value
  const deletedTravel = await Travel.destroy({
    where: { id: req.params.id },
  });
  if (!deletedTravel) {
    return res.status(404).json({
      error_message: `Cannot be deleted because the Travel with ID ${req.params.id} does not exist.`,
    });
  }
  return (
    res
      .status(200)
      // .json({ message: "The Travel has successfully been deleted." })
      .json(deletedTravel)
      .send()
      .end()
  );
});

module.exports = router;
