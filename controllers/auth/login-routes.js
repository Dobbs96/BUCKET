const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("HELLO LOGIN");
});

module.exports = router;
