const express = require("express");

const { createUser, loginUser, getMe, updateProfile, makeAdmin ,getAllUser} = require("../Controllers/user.controller");
const verifyToken = require("../Middleware/verifyToken");


const router = express.Router();


router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.get("/getMe", verifyToken, getMe);
router.get("/getAllUser", getAllUser);
router.patch("/updateProfile", verifyToken, updateProfile);
router.patch("/makeAdmin", verifyToken, makeAdmin);


module.exports = router;