const ChallengeEntry = require('../models/ChallengeEntry');

// Create a new challenge entry
exports.createChallengeEntry = async (req, res) => {
    const { challenge, challenger, date, videoLink, habitCompleted } = req.body;

    try {
        const newChallengeEntry = new ChallengeEntry({ 
            challenge, 
            challenger, 
            date, 
            videoLink, 
            habitCompleted 
        });
        const challengeEntry = await newChallengeEntry.save();
        res.json(challengeEntry);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Get all challenge entries
exports.getAllChallengeEntries = async (req, res) => {
    try {
        const challengeEntries = await ChallengeEntry.find()
            .populate('challenge')
            .populate('challenger');
        res.json(challengeEntries);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
