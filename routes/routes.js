const express = require("express");
var proxy = require("express-http-proxy");
const router = express.Router();

router.use("/photos", proxy("http://localhost:3001"));
router.use("/sidebar", proxy("http://localhost:7878"));
router.get("/reviews/:id", proxy("http://localhost:3002"));
router.use("/header", proxy("http://localhost:7763"));

module.exports = router;
