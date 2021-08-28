const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const withAuth = require("../utils/auth");

router.use("/api", apiRoutes);
// /auth/login or /auth/logout or /auth/signup
router.use("/auth", authRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
