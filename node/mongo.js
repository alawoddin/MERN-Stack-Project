const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const createProduct = async (req , res , next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('product').insertOne(newProduct);

    } catch (error) {
        return res.json({ message: 'Creating product failed, please try again.' });
    };
    client.close();

    res.json(newProduct);

};


const getProducts = async (req , res , next) => {

};


exports.createProduct = createProduct;
exports.getProducts = getProducts;