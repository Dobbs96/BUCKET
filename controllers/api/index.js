const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const experienceRoutes = require("./experience-routes.js");
const recipeRoutes = require("./recipe-routes.js");
// const travelRoutes = require("./travel-routes.js");

router.use("/user", userRoutes);
router.use("/experience", experienceRoutes);
router.use("/recipe", recipeRoutes);
// router.use("/travel", travelRoutes);

router.get("/", (req, res) => res.send("Hello API"));

module.exports = router;
