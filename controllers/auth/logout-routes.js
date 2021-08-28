const router = require("express").Router();

// /auth/logout
router.post("/", async (req, res) => {
  console.log("inside auth/logout post");
  console.log(req.session.loggedIn);
  const temp = req.session.loggedIn;
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      console.log("inside logout route destroy");
      console.log(temp);
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
