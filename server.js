const express = require('express');
const app = express();
const mongoose = require('mongoose');

const productsRouter = require('./routes/products');
require('dotenv').config();


//Connect database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

//middleware
app.use(express.json());
app.use('/products', productsRouter);
const port = process.env.PORT || '3000';
app.listen(port, () => console.log('server started'));