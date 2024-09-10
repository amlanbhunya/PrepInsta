const express = require('express');
const {
    registerUser,
    loginUser,
    getUserProfile,
} = require('../controllers/usercontroller');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);


// Private routes
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
