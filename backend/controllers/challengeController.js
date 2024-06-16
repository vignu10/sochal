const Challenge = require('../models/ChallengeModel');

// Create a new challenge
exports.createChallenge = async (req, res) => {
    const { name, description, type } = req.body;

    try {
        const newChallenge = new Challenge({ name, description, type });
        const challenge = await newChallenge.save();
        res.json(challenge);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Get all challenges
exports.getAllChallenges = async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.json(challenges);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
