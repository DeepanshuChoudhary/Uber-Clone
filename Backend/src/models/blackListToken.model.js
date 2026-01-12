const mongoose = require('mongoose');

const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expire: 86400   // 24hr
    }
});

module.exports = mongoose.model('BlackListToken', blackListTokenSchema);