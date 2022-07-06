

import { stringify } from "querystring";

const mongoose = reqiure("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        reqiure: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email : {
        type: String,
        reqiure: true,
        max: 50,
        unique: true,
    },
    password : {
        type: String,
        reqiure: true,
        max: 50,
        min: 6,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: stringify,
        default: "",
    },
});

module.exports = mongoose.model("Users", userSchema);  