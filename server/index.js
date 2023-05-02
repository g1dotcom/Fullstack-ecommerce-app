const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const productRoutes = require("./routes/products.js");

dotenv.config();
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(5000, () => {
  connect();
  console.log("Server is running on port ");
});
