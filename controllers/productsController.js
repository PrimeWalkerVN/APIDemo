const Product = require('../models/product');

//Get all product
exports.getAllProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Post one product 
exports.postProduct = async(req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        imagePath: req.body.imagePath
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//Get product by id
exports.getProduct = async function (req, res, next) {
    try {
      product = await Product.findById(req.params.id);
      if (product == null) {
        return res.status(404).json({ message: 'Cant find product'});
      }
    } catch(err){
      return res.status(500).json({ message: err.message });
    }
    res.product = product;
    next();
}

//Update one product
exports.updateProduct =  async(req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name;
    }
    if (req.body.price != null) {
      res.product.price = req.body.price;
    }
    if (req.body.price != null) {
        res.product.imagePath = req.body.imagePath;
      }
    try {
      const updatedProduct = await res.product.save()
      res.json(updatedProduct)
    } catch {
      res.status(400).json({ message: err.message })
    }
}

//Delete one product 
exports.deleteProduct =  async (req, res) => {
    try {
        await res.product.remove()
        res.json({ message: 'Deleted This product' })
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}