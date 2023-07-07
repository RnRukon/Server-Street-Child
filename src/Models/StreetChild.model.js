const Mongoose = require("mongoose");
const { ObjectId } = Mongoose.Schema.Types;

const streetChildSchema = Mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim: true,
    },


    status: {
        type: String,
        default: "pending",
        enum: ["pending", "approved", "delivered", "rejected"],
    },
    policeVerifyStatus: {
        type: String,
        default: "pending",
        enum: ["pending", "verified", "rejected"],
    },

    user: {
        type: ObjectId,
        require: [true, "User id is required"],
        ref: "User"
    },
    dateOfBirth: {
        type: Date,
        require: [true, "Date of birth is required"],
    },

    photo: {
        type: String,
        require: [true, "Photo is required"],

    },
    gender: {
        type: String,
        require: [true, "gender is required"],

    },
    childId: String,
    organization: String,
    seat: {
        type: Number,
        require: [true, "Seat is required"],
    },
    emptySeat: {
        type: Number,
        default: 0
    },
},
    {
        timestamps: true,
    }
);


const Child = Mongoose.model('Child', streetChildSchema);

module.exports = Child;