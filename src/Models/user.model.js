const Mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = Mongoose.Schema.Types;

const userSchema = Mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is require"],
        trim: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
        validate: [validator.isEmail, "Provide a valid Email"],
        unique: [true, "Email is must be unique"],
    },
    password: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },

    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive", "blocked"],
    },

    childList: [
        {
            type: ObjectId,
            ref: "Child"
        }
    ],
    role: {
        type: String,
        default: 'user',
        enum: ["user", "admin", "organization"],
    },
    dateOfBirth: String,
    photoURL: String,
    postOffice: String,
    postCode: String,
    district: String,
    upazila: String,
    policeStation: String,
    division: String,
    founded: String
},
    {
        timestamps: true,
    }
);


const User = Mongoose.model('User', userSchema);

module.exports = User;