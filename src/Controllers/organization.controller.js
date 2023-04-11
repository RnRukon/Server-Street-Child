const Child = require("../Models/StreetChild.model");
const Organization = require("../Models/organization.model");
const { registrationOrganizationService, getOrganizationsOrganizationService, deliveryChildService, updateOrganizationService } = require("../Services/organization.service");

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
exports.updateOrganization = async (req, res) => {
    try {
        const id = req.params.id
        const organization = await updateOrganizationService(id, req.body);

        res.status(200).json({
            result: organization,
            status: "success",
            message: "Updated is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};



exports.deliveryChild = async (req, res) => {
    try {

        const child = await Child.findById({ _id: req.body.childId });


        if (child.status === 'pending' || child.status === 'rejected') {
            return res.status(200).json({
                status: "fail",
                message: "Child is not approved",
            });
        }
        if (child.status === 'delivered') {
            return res.status(200).json({
                status: "fail",
                message: "Child is already delivered",
            });
        }

        if (!child) {
            return res.status(200).json({
                status: "fail",
                message: "Child is not exist",
            });
        }


        const findChild = await Organization.findById({ _id: req.body.organizationId }).populate('childList');
        const exist = await findChild?.childList?.find(d => d?.childId === req?.body?.childId);



        if (exist) {
            return res.status(200).json({
                status: "fail",
                message: "Child is already delivered",
            });
        }

        const organization = await deliveryChildService(req.body);

        child.status = 'delivered';
        child.organization=findChild.name;

        child.save()
        res.status(200).json({
            result: organization,
            status: "success",
            message: "delivery Child is Successfully",
        });

    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};