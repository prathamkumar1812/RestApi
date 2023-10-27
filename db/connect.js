const mongoose = require('mongoose');

const url = "mongodb+srv://prathamkumarmbd:ljanoNENtzHX3BB6@cluster0.cywblj2.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    console.log("Connecting to DB");
    return await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;