const router = require("express").Router();

// router.get("/", (req, res) => res.send("Hello Dashboard"));
router.get("/", (req, res) => {
  console.log("inside dashboard-routes.js get / ");
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});

module.exports = router;
