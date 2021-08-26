const router = require("express").Router();
const models = require("../models");

router.get("/", (req, res) => res.send("Hello there"));

module.exports = router;
