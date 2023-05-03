const router = require("express").Router();
const Products = require("../models/products.js");

const products = async (req, res) => {
  try {
    const { name, desc, rate, profilePicture } = req.body;

    const newProducts = new Products({
      name,
      desc,
      rate,
      profilePicture,
    });

    const products = await newProducts.save();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  products,
};
