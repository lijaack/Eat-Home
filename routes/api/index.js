const router = require("express").Router();
const restaurantRoutes = require("./restaurants");

// Book routes
router.use("/restaurants", restaurantRoutes);

module.exports = router;
