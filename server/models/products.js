const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
      max: 100,
      unique: true,
    },
    rate: {
      type: Number,
      default: 0,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    followings: {
      type: Array,
      default: [],
    },
    category: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSchema);
