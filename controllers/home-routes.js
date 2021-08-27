const router = require("express").Router();
const models = require("../models");

router.get("/", (req, res) => res.render("home"));

module.exports = router;
