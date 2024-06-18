const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['video', 'habit'] // Define types if necessary
    },
    date:{
        type: String,
        required: true,
    },
    videoLink: {
        type: String,
        required: true
    },
    habitCompleted:{
        type: Boolean,
        default: false,
    },
    groupName:{
        type:String,
        required: true,
    },
});

module.exports = mongoose.model('Habit', HabitSchema);
