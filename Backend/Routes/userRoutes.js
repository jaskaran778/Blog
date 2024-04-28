const express = require("express");
const {
    updateUser,
    deleteUser,
    signOut,
    getUsers,
    getUser,
} = require("../Controllers/userControllers");
const { verifyToken } = require("../Utils/verifyUser");

const router = express.Router();
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);

module.exports = router;
