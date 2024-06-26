import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: [true, "Please add an email"],
        },
        login: {
            type: String,
            unique: true,
            required: [true, "Please add a login"],
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
        },
        position: {
            type: String
        },
        dateOfBirth: {
            type: Date,
        },
        role:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);

