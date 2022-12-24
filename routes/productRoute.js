const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");

const { createProduct } = require("../controller/productController");
const { upload } = require("../utils/fileUploadMulter");

router.post("/", protect, upload.single("image"), createProduct);

module.exports = router;
