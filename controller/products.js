const products = require('../modles/user');
const getAllProducts = async(req, res) => {
    try {
        const mydata = await products.find(req.query);
        res.status(200).json(mydata);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
module.exports = getAllProducts;