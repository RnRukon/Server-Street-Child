const express = require("express");
const { postFeedbacks, getFeedbacks } = require("../Controllers/feedbacks.controller");
const verifyToken = require("../Middleware/verifyToken");
const router = express.Router();



router.post("/postFeedbacks", verifyToken, postFeedbacks);
router.get("/getFeedbacks", verifyToken, getFeedbacks);











module.exports = router;