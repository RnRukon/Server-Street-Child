
const express = require("express");
const { registrationOrganization, getOrganizationsOrganization, deliveryChild,updateOrganization } = require("../Controllers/organization.controller");
const verifyToken = require("../Middleware/verifyToken");
const router = express.Router();



router.post("/registrationOrganization", verifyToken, registrationOrganization);
router.get("/getOrganizations", verifyToken, getOrganizationsOrganization);
router.patch("/deliveryChild", verifyToken, deliveryChild);
router.patch("/updateOrganization/:id", verifyToken, updateOrganization);










module.exports = router;