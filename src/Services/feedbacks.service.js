const Feedbacks = require("../Models/feedbacks.model");


exports.postFeedbacksService = async (massage) => {
    const data = await Feedbacks.create(massage);
    return data;
};
exports.getFeedbacksService = async () => {
    const data = await Feedbacks.find({}).sort('-createdAt');
    return data;
};