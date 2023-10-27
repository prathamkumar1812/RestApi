const express = require("express");
const router = express.Router();
const getAllProducts = require("../controller/products.js");

router.route("/")
    .get(getAllProducts);
router.route("/testing").get(getAllProducts);
module.exports = router;