const mongoose = require('mongoose');
const userShema = new mongoose.Schema({
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
}, {
    timestamps: true,
});

userShema.methods.create = async function() {
    return this.save();
};


const User = mongoose.model("User", userShema);
module.exports = User;