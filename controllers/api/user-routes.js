const router = require("express").Router();
const { Experience, Recipe, Travel, User } = require("../../models");

// GET /api/user
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [Experience, Recipe, Travel],
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/user/:id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [Experience, Recipe, Travel],
      attributes: { exclude: ["password"] },
    });
    if (!userData)
      return res
        .status(400)
        .json({ message: `There is no user by the ID of ${req.params.id}` });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST /api/user

router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
