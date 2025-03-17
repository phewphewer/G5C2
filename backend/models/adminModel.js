const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "admin",
        },
    },
    { timestamps: true }
);

// static create admin method
adminSchema.statics.createAdmin = async function (username, email, password) {
    // validation
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough");
    }

    const emailExists = await this.findOne({ email });
    if (emailExists) {
        throw Error("Email already in use");
    }

    const usernameExists = await this.findOne({ username });
    if (usernameExists) {
        throw Error("Username already in use");
    }

    const hash = await bcrypt.hash(password, 10); // Hash password with 10 salt rounds

    // create a new admin
    const admin = await this.create({ username, email, password: hash });
    return admin;
};

// static login method
adminSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    const admin = await this.findOne({ email });
    if (!admin) {
        throw Error("Incorrect email");
    }
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
        throw Error("Incorrect password");
    }
    return admin;
};

module.exports = mongoose.model("Admin", adminSchema);
