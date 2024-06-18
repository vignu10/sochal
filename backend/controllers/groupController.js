const Groups = require('../models/groupModel');

// Create a new challenge entry
exports.createGroups = async (req, res) => {
    const { groupName } = req.body;

    try {
        const newGroups = new Groups({ 
            groupName
        });
        const groups = await newGroups.save();
        res.json(groups);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all challenge entries
exports.getAllGroups = async (req, res) => {
    try {
        const groups = await Groups.find()
            .populate('groups')
        res.json(groups);
    } catch (err) {
        res.status(500).send(err);
    }
};
