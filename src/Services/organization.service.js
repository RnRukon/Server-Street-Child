const Organization = require("../Models/organization.model");


exports.registrationOrganizationService = async (organization) => {
    const data = await Organization.create(organization);
    return data;
};
exports.getOrganizationsOrganizationService = async () => {
    const data = await Organization.find({});
    return data;
};