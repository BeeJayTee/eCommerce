const express = require("express");

const {
  getCategoryImages,
  getRandomProduct,
} = require("../controllers/productController");

const router = express.Router();

router.use("/", getCategoryImages);

router.use("/single", getRandomProduct);

module.exports = router;
