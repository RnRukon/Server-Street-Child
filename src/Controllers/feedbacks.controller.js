

const { postFeedbacksService, getFeedbacksService } = require("../Services/feedbacks.service");

exports.postFeedbacks = async (req, res) => {
    try {
        const data = await postFeedbacksService(req.body);
        res.status(200).json({
            result: data,
            status: "success",
            message: "Post is Successfully",
        });
    } catch (error) {

        console.log(error);
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};
exports.getFeedbacks = async (req, res) => {
    try {

        const data = await getFeedbacksService();

        res.status(200).json({
            result: data,
            status: "success",
            message: "Get feedbacks is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: 'Server error, please try ageing'
        });
    }
};