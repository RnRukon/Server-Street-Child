const Organization = require("../Models/organization.model");


exports.registrationOrganizationService = async (organization) => {
    const data = await Organization.create(organization);
    return data;
};
exports.getOrganizationsOrganizationService = async () => {
    const data = await Organization.find({}).populate('childList');
    return data;
};
exports.getSingleOrganizationService = async (id) => {
   
    const data = await Organization.findById({ _id: id }).populate('childList');
    return data;
};
exports.updateOrganizationService = async (id, organizationData) => {

    const data = await Organization.findByIdAndUpdate({ _id: id },
        organizationData,
        { runValidators: true });
    return data;
};
exports.deliveryChildService = async ({ childId, organizationId }) => {

    const data = await Organization.findByIdAndUpdate({ _id: organizationId }, {
        $push: {
            childList: childId
        }
    });
    return data;
};