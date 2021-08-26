const router = require("express").Router();

router.get("/", (req, res) => res.send("Hello user"));

module.exports = router;
