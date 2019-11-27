const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Get all products
router.get('/',productController.getAllProducts);

// Get one product
router.get('/:id',productController.getProduct, (req, res) => {
    res.json(res.product);
});

// Create one product
router.post('/',productController.postProduct);

// Update one product
router.put('/:id',productController.getProduct,productController.updateProduct);

// Delete one product
router.delete('/:id',productController.getProduct,productController.deleteProduct);

module.exports = router;
