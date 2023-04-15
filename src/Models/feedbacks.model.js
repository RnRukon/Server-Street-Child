const Mongoose = require("mongoose");
const validator = require("validator");

const feedbacksSchema = Mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
        require: [true, "Email is required"],
        validate: [validator.isEmail, "Provide a valid Email"],

    },
    message: {
        type: String,
        require: [true, "massage is required"],
        trim: true,
    },
    rating: {
        type: Number,
        trim: true,
    },
    photoURL: String

},
    {
        timestamps: true,
    }
);


const Feedback = Mongoose.model('Feedback', feedbacksSchema);

module.exports = Feedback;