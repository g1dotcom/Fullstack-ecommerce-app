express = require("express");

const {
  products,
  getAllProducts,
  getCategoriestv,
  getCategories,
  getCategoriesphone,
  getCategoriesheadphone,
} = require("../controllers/products.js");

const router = express.Router();

//create a new products
router.post("/", products);
//get all products
router.get("/", getAllProducts);
//getcategories
router.get("/categories", getCategories);
//get categories of products( phone)
router.get("/tv", getCategoriestv);
//get categories of products(tv)
router.get("/phone", getCategoriesphone);
//get categories of products(tv)
router.get("/headphone", getCategoriesheadphone);

module.exports = router;
