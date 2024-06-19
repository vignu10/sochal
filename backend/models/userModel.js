const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
    },
});

module.exports = mongoose.model('User', UserSchema);
