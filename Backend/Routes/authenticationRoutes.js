const express = require("express");
const router = express.Router();
const {
    signUp,
    signIn,
    google,
} = require("../Controllers/authenticationControllers");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google", google);

module.exports = router;
