const router = require("express").Router();
const loginRoutes = require("./login-routes");

router.use("/login", loginRoutes);

module.exports = router;
