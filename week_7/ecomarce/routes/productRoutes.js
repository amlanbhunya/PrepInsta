const express = require('express');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// Admin routes (assuming only admin can create/update/delete products)
router.route('/').post(protect, createProduct);
router.route('/:id').put(protect, updateProduct).delete(protect, deleteProduct);

module.exports = router;
