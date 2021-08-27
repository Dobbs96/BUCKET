const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const withAuth = require("../utils/auth");

router.use("/api", withAuth, apiRoutes);
// /auth/login or /auth/logout or /auth/signup
router.use("/auth", authRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", withAuth, dashboardRoutes);

module.exports = router;
