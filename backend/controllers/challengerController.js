const Challenger = require('../models/ChallengerModel');

// Create a new challenger
exports.createChallenger = async (req, res) => {
    const { name, email, uid } = req.body;

    try {
        const newChallenger = new Challenger({ name, email, uid });
        const challenger = await newChallenger.save();
        res.json(challenger);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Get all challengers
exports.getAllChallengers = async (req, res) => {
    try {
        const challengers = await Challenger.find();
        res.json(challengers);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
