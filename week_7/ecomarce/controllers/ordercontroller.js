const Order = require('../models/order');
const Product = require('../models/product');

const placeOrder = async (req, res) => {
    const { products } = req.body;

    let totalPrice = 0;

    const orderItems = await Promise.all(products.map(async (item) => {
        const product = await Product.findById(item.product);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.stock < item.quantity) {
            return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
        }

        product.stock -= item.quantity;
        await product.save();

        totalPrice += product.price * item.quantity;

        return {
            product: product._id,
            quantity: item.quantity,
        };
    }));

    const order = new Order({
        user: req.user._id,
        products: orderItems,
        totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
};

const getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email').populate('products.product', 'name price');

    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

module.exports = {
    placeOrder,
    getOrderById,
};
