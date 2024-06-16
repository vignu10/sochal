const mongoose = require('mongoose');

const ChallengeEntrySchema = new mongoose.Schema({
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true
    },
    challenger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenger',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    videoLink: {
        type: String
    },
    habitCompleted: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ChallengeEntry', ChallengeEntrySchema);
