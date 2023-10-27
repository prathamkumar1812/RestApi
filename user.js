const connectDB = require('./db/connect');
const User = require('./modles/user');
const userdata = require('./user.json');
const start = async() => {
    try {
        connectDB();
        await User.create(userdata);

        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
};
start();