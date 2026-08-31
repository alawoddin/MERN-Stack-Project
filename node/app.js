const express  = require("express");

// const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-route');

const app = express();

app.use(placesRoutes);



app.listen(5000);