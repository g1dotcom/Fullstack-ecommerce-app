const router = require("express").Router();
const User = require("../models/users.js");
const Products = require("../models/products.js");
const bcrypt = require("bcryptjs");

//update user
router.put("/:id", async (req, res) => {
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
});

//delete user
router.delete("/:id", async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted!");
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

//get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get all user list
router.get("/list", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});
//favorite list
router.put("/:id/favorite", async (req, res) => {
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
});
//unfavorite list

router.put("/:id/unfavorite", async (req, res) => {
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
});

module.exports = router;