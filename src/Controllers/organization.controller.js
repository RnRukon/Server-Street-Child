const { registrationOrganizationService,getOrganizationsOrganizationService } = require("../Services/organization.service");

exports.registrationOrganization = async (req, res) => {
    try {

        const organization = await registrationOrganizationService(req.body);

        res.status(200).json({
            result: organization,
            status: "success",
            message: "Registration is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};

exports.getOrganizationsOrganization = async (req, res) => {
    try {

        const organization = await getOrganizationsOrganizationService();

        res.status(200).json({
            result: organization,
            status: "success",
            message: "Get Organizations is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};