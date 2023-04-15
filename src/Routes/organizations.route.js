
const express = require("express");
const { registrationOrganization, getOrganizationsOrganization, deliveryChild,updateOrganization,getSingleOrganization } = require("../Controllers/organization.controller");
const verifyToken = require("../Middleware/verifyToken");
const router = express.Router();



router.post("/registrationOrganization", verifyToken, registrationOrganization);
router.get("/getOrganizations", verifyToken, getOrganizationsOrganization);
router.get("/getSingleOrganization/:id", verifyToken, getSingleOrganization);
router.patch("/deliveryChild", verifyToken, deliveryChild);
router.patch("/updateOrganization/:id", verifyToken, updateOrganization);










module.exports = router;