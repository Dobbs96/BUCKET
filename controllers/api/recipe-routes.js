const router = require("express").Router();

router.get("/", (req, res) => res.send("Hello recipe"));

module.exports = router;
