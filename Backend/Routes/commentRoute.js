const express = require("express");
const { verifyToken } = require("../Utils/verifyUser");
const {
    createComment,
    getPostComments,
    likeComment,
    editComment,
    deleteComment,
    getcomments,
} = require("../Controllers/commentController");

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);
router.get("/getcomments", verifyToken, getcomments);

module.exports = router;
