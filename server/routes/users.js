const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  AddFavorite,
  DeleteFavorite,
} = require("../controllers/users.js");

const router = express.Router();

//update user
router.put("/:id", updateUser);
//delete user
router.delete("/:id", deleteUser);
//get a user
router.get("/:id", getUser);
//get all user list
router.get("/", getAllUsers);
//favorite list
router.put("/:id/favorite", AddFavorite);
//unfavorite list

router.put("/:id/unfavorite", DeleteFavorite);

module.exports = router;
