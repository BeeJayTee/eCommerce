const express = require("express");

const {
  getCategoryImages,
  getRandomProduct,
  getProductCategories,
} = require("../controllers/productController");

const router = express.Router();

router.get("/images", getCategoryImages);

router.get("/single", getRandomProduct);

router.get("/categories", getProductCategories);

module.exports = router;
