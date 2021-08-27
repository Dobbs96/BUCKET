const router = require("express").Router();

// router.get("/", (req, res) => res.send("Hello Dashboard"));
router.get("/", (req, res) => res.render("dashboard"));

module.exports = router;
