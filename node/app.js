const express = require("express");

const bodyParser = require("body-parser")

const mongo = require("./mongo");


const app = express();

app.use(bodyParser.json());

app.post('/products' , mongo.createProduct);
app.get('/products');

app.listen(3000);

