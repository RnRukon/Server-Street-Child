const Child = require("../Models/StreetChild.model");


exports.addStreetChildService = async (childData) => {
    const data = await Child.create(childData);
    return data;
};

exports.getMyAllStreetChildService = async (id) => {
    const data = await Child.find({ user: id }).select('-user');
    return data;
};
exports.getAllStreetChildService = async (id) => {
    const data = await Child.find({}).populate('user');
    return data;
};
exports.updateChildService = async (id, childData) => {
    const data = await Child.updateOne({ _id: id }, childData, { runValidators: true });
    return data;
};