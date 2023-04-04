const Mongoose = require("mongoose");
const validator = require("validator");

const organizationSchema = Mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        unique: [true, 'Already have this organization'],
        trim: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
        validate: [validator.isEmail, "Provide a valid Email"],
        unique: [true, "Email is must be unique"],
    },
    phoneNumber: {
        type: String,
        unique: [true, 'Phone Number is unique'],
        trim: true,
    },

    photoURL: {
        type: String,
        require: [true, "Photo is required"],

    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "approved", "rejected"],
    },
    postOffice: {
        type: String,
        require: [true, "Post Office is required"],
    },
    postCode: {
        type: String,
        require: [true, "Post Code  is required"],
    },
    district: {
        type: String,
        require: [true, "District is required"],
    },
    upazila: {
        type: String,
        require: [true, "Upazila is required"],
    },
    division: {
        type: String,
        require: [true, "Division is required"],
    },
    seat: {
        type: Number,
        require: [true, "Seat is required"],
    },
    role: {
        type: String,
        default: "organization"
    },
    founded:String
},
    {
        timestamps: true,
    }
);


const Organization = Mongoose.model('Organization', organizationSchema);

module.exports = Organization;