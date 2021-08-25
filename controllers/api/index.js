const router = require("express").Router();

router.get("/", (req, res) => res.send("Hello API"));

module.exports = router;
