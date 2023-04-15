const express = require("express");
const router = express.Router();

const { addStreetChild, getMyAllStreetChild, getAllStreetChild, updateChild,getSingleChildByUserId } = require("../Controllers/streetChild.controller");
const verifyToken = require("../Middleware/verifyToken");
const { getAllUser, getSingleUser } = require("../Controllers/user.controller");


router.post("/addStreetChild", verifyToken, addStreetChild);
router.get("/getMyAllStreetChild", verifyToken, getMyAllStreetChild);
router.get("/getAllStreetChild",  getAllStreetChild);
router.get("/getAllUser", verifyToken, getAllUser);
router.get("/getSingleChildByUserId/:id", verifyToken, getSingleChildByUserId);
router.get("/getSingleUser/:id", verifyToken, getSingleUser);
router.patch("/updateChild/:id", verifyToken, updateChild);









module.exports = router;