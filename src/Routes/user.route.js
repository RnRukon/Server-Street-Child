const express = require("express");

const { createUser, loginUser, getMe,updateProfile} = require("../Controllers/user.controller");
const verifyToken = require("../Middleware/verifyToken");


const router = express.Router();


router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.get("/getMe", verifyToken, getMe);
router.patch("/updateProfile", verifyToken, updateProfile);


module.exports = router;