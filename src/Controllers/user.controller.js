const User = require("../Models/user.model");
const { registrationOrganizationService } = require("../Services/organization.service");
const { saveUserService, findByEmailUserService, updateProfileService, getAllUserService, getSingleUserService, makeAdminService } = require("../Services/user.service");
const { generateToken } = require("../utils/token");

exports.createUser = async (req, res) => {
    try {
        const findUser = await findByEmailUserService(req.body.email);

        if (findUser) {
            return req.status(200).json({
                status: "success",
                message: 'You are already Registered, please login'
            })
        }

        if (req.body.role === "organization") {
            const user = await saveUserService(req.body);
            await registrationOrganizationService(req.body);

            res.status(200).json({
                result: user,
                status: "success",
                message: "Signup Successfully",
            });
        } else {
            const user = await saveUserService(req.body);
            res.status(200).json({
                result: user,
                status: "success",
                message: "Signup Successfully",
            });
        }


    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.loginUser = async (req, res) => {
    try {

        const findUser = await findByEmailUserService(req.body.email);

        if (req.body.password !== findUser.password) {
            return res.status(401).json({
                error: 'Password wrong,please try again!'
            })
        }

        if (!findUser) {
            return res.status(401).json({
                error: 'You are not Registered,Please before do you Register then doing login'
            })
        }

        findUser.status = "active";

        findUser.save({
            validateBeforeSave: false
        });


        const token = generateToken(findUser);


        res.status(200).json({
            result: {
                user: findUser,
                token: token,
            },
            status: "success",
            message: "Signin Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.getMe = async (req, res) => {
    try {


        const findUser = await findByEmailUserService(req.user.email);


        res.status(200).json({
            result: {
                user: findUser,

            },
            status: "success",
            message: "Get me Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const user = await updateProfileService(req.user.email, req.body);
        res.status(200).json({
            result: {
                user: user,

            },
            status: "success",
            message: "Update Profile Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.makeAdmin = async (req, res) => {
    try {
        const email = req.body.email;

        const findUser = await User.findOne({ email: email });
        if (!findUser) {
            return res.status(404).json({
                status: "fail",
                error: 'This Email is not user'
            });
        }

        const user = await makeAdminService(email);
        res.status(200).json({
            result: {
                user: user,

            },
            status: "success",
            message: "Make Admin is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.getAllUser = async (req, res) => {
    try {
        const user = await getAllUserService();
        res.status(200).json({
            result: user,
            status: "success",
            message: "Get all User Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getSingleUserService(id);
        res.status(200).json({
            result: user,
            status: "success",
            message: "Get all User Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};


