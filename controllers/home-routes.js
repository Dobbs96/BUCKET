const router = require("express").Router();

router.get("/", (req, res) => res.send("Hello there"));

module.exports = router;
