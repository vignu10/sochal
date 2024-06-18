const Habit = require('../models/habitModel');

// Create a new challenge
exports.uploadVideo = async (req, res) => {
    const { name, type , date, videoLink , habitCompleted ,groupName } = req.body;

    try {
        const newHabit = new Habit({ name, type ,date, videoLink , habitCompleted ,groupName});
        const habit = await newHabit.save();
        res.json(habit);
    } catch (err) {
        res.status(500).send(err);
    }
};



// Get all challenges
exports.getUploadedVideos = async (req, res) => {
    try {
        const habits = await Habit.find(req.body);
        res.json(habits);
    } catch (err) {
        res.status(500).send(err);
    }
};
