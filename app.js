const express = require("express");
const connectDb = require("./db/connect.js");

connectDb();
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/app/products", require("./routes/product.js"));


app.listen(4000, () => console.log('Server started at port : 4000'));