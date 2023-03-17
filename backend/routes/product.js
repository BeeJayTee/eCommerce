const express = require("express");

const {
  getCategoryImages,
  getRandomProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getCategoryImages);

router.get("/single", getRandomProduct);

module.exports = router;
