const mongoose = require('mongoose');
require('dotenv').config();



const connectDB = async() => {
    console.log("Connecting to DB");
    return await mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;