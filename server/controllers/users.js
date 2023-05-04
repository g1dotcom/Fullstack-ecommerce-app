const User = require("../models/users.js");
const Products = require("../models/products.js");
const bcrypt = require("bcryptjs");

//update  user
const updateUser = async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).send(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated!");
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
//delete user
const deleteUser = async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted!");
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
//get user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
//add favorite
const AddFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const products = await Products.findById(req.body.productId);
    if (!user.favorites.includes(req.body.productId)) {
      await user.updateOne({ $push: { favorites: req.body.productId } });
      await products.updateOne({ $push: { followings: req.params.id } });
      res.status(200).json("Product has been added to favorites!");
    } else {
      res.status(403).send("You are not following this user!");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
//delete favorite
const DeleteFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const products = await Products.findById(req.body.productId);
    if (user.favorites.includes(req.body.productId)) {
      await user.updateOne({ $pull: { favorites: req.body.productId } });
      await products.updateOne({ $pull: { followings: req.params.id } });
      res.status(200).json("Product has been deleted to favorites!");
    } else {
      res.status(403).send("You are not following this user!");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  AddFavorite,
  DeleteFavorite,
};
