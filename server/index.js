const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");

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
//middleware
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded succesfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5000, () => {
  connect();
  console.log("Server is running on port ");
});
