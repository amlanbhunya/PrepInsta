const express = require('express');
const {
    placeOrder,
    getOrderById,
} = require('../controllers/ordercontroller');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

// Private routes
router.route('/').post(protect, placeOrder);
router.route('/:id').get(protect, getOrderById);

module.exports = router;
