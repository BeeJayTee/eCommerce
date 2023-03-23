const express = require("express");

const {
  getCategoryImages,
  getRandomProduct,
  getProductCategories,
  getSingleProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/images", getCategoryImages);

router.get("/random", getRandomProduct);

router.get("/categories", getProductCategories);

router.get("/single/:id", getSingleProduct);

module.exports = router;
