const User = require("../Models/user.model");
const { addStreetChildService, getMyAllStreetChildService, getAllStreetChildService, updateChildService } = require("../Services/streetChild.service");
const { findByEmailUserService, } = require("../Services/user.service");

exports.addStreetChild = async (req, res) => {
    try {

        const findUser = await findByEmailUserService(req.user.email);
        const newData = { ...req.body, user: findUser._id };
        const child = await addStreetChildService(newData);

        await User.updateOne({
            _id: findUser._id
        }, {
            $push: {
                childList: child._id
            }
        })


        res.status(200).json({
            result: child,
            status: "success",
            message: "Add Child is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.getMyAllStreetChild = async (req, res) => {
    try {

        const { _id } = await findByEmailUserService(req.user.email);
        const child = await getMyAllStreetChildService(_id);

        res.status(200).json({
            result: child,
            status: "success",
            message: "Get Child is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.getAllStreetChild = async (req, res) => {
    try {

        const child = await getAllStreetChildService();

        res.status(200).json({
            result: child,
            status: "success",
            message: "Get Child is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};

exports.updateChild = async (req, res) => {
    try {
        const { id } = req.params;
        const child = await updateChildService(id, req.body);

        res.status(200).json({
            result: child,
            status: "success",
            message: "Update Child is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};