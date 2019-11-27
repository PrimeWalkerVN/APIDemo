let mongoose = require('mongoose');
let Schema = mongoose.Schema
let schema = new Schema({
    name: {type: String,required: true},
    price: {type: Number, required: true},
    imagePath: {type: String, required: false}
});

let products = mongoose.model('Product',schema, 'products');
module.exports = products;