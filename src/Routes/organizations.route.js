
const express = require("express");
const { registrationOrganization,getOrganizationsOrganization } = require("../Controllers/organization.controller");
const verifyToken = require("../Middleware/verifyToken");
const router = express.Router();



router.post("/registrationOrganization", verifyToken, registrationOrganization);
router.get("/getOrganizations", verifyToken, getOrganizationsOrganization);










module.exports = router;