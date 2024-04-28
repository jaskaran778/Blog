const express = require("express");
const { verifyToken } = require("../Utils/verifyUser");
const {
    create,
    getPosts,
    deletepost,
    updatepost,
} = require("../Controllers/postController");

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

module.exports = router;
