const router = require("express").Router();

router.get("/", (req, res) => res.send("Hello Dashboard"));

module.exports = router;
