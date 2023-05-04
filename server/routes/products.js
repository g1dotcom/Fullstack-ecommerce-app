express = require("express");

const { products } = require("../controllers/products.js");

const router = express.Router();

//products
router.post("/", products);

module.exports = router;
