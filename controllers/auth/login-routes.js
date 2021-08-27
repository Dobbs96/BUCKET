const router = require("express").Router();
const { User } = require("../../models");

// /auth/login
router.get("/", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Username not found. Please try again." });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect username or password. Please try again",
      });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      res.json({ message: "Success, you are logged in." });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
