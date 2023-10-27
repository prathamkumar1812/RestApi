const connectDB = require('./db/connect');
const User = require('./modles/user');
const userdata = require('./user.json');
const start = async() => {
    try {
        connectDB("mongodb+srv://prathamkumarmbd:ljanoNENtzHX3BB6@cluster0.cywblj2.mongodb.net/?retryWrites=true&w=majority");
        await User.create(userdata);

        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
};
start();