const express = require("express");

const {
  getCategoryImages,
  getAllProducts,
  getRandomProduct,
  getProductCategories,
  getSingleProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/images", getCategoryImages);

router.get("/all", getAllProducts);

router.get("/random", getRandomProduct);

router.get("/categories", getProductCategories);

router.get("/single/:id", getSingleProduct);

module.exports = router;
