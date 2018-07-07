const router = require("express").Router();
const listRoutes = require("./lists");

// List routes
router.use("/lists", listRoutes);

module.exports = router;
