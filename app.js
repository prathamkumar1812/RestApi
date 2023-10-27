const express = require("express");
const connectDb = require("./db/connect.js");

const PORT = process.env.PORT || 4000;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/app/products", require("./routes/product.js"));

connectDb();
app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
