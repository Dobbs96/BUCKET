const router = require("express").Router();
const loginRoutes = require("./login-routes");
const logoutRoutes = require("./logout-routes");
const signupRoutes = require("./signup-routes");

router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
