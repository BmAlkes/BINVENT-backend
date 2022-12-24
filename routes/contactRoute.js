const express = require("express");
const { contactUs } = require("../controller/contactController");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");

router.post("/", protect, contactUs);

module.exports = router;
