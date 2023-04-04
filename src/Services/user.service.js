const User = require("../Models/user.model");


exports.getAllUserService = async () => {
    const user = await User.find({}).populate('childList');
    return user;
};
exports.getSingleUserService = async (id) => {
    const user = await User.findById({ _id: id }).populate('childList');
    return user;
};



exports.saveUserService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
};
exports.findByEmailUserService = async (email) => {
    const user = await User.findOne({ email });
    return user;
};
exports.updateProfileService = async (email, data) => {
    const user = await User.findOneAndUpdate({ email },
        data,
        {
            runValidators: true
        });
    return user;
};


