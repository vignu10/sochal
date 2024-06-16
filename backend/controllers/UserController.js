const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
    const { name, email } = req.body;

    try {
        const newUser = new User({ name, email });
        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
