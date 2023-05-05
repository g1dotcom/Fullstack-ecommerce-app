const router = require("express").Router();
const Products = require("../models/products.js");

//create new product
const products = async (req, res) => {
  try {
    const { name, desc, rate, profilePicture, categories } = req.body;

    const newProducts = new Products({
      name,
      desc,
      categories,
      rate,
      profilePicture,
    });

    const products = await newProducts.save();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
//get all products
const getAllProducts = async (req, res) => {
  const products = await Products.find();
  res.status(200).json(products);
};
//getcategories of products
const getCategories = async (req, res) => {
  const products = await Products.find();
  const categories = products.map((product) => product.categories);
  res.status(200).json(categories);
};
//get categories(tv) of products
const getCategoriestv = async (req, res) => {
  const products = await Products.find({ categories: "tv" });
  res.status(200).json(products);
};
//get categories(phone) of products
const getCategoriesphone = async (req, res) => {
  const products = await Products.find({ categories: "phone" });
  res.status(200).json(products);
};
//get categories(headphone) of products
const getCategoriesheadphone = async (req, res) => {
  const products = await Products.find({ categories: "headphone" });
  res.status(200).json(products);
};

module.exports = {
  products,
  getAllProducts,
  getCategories,
  getCategoriestv,
  getCategoriesphone,
  getCategoriesheadphone,
};
