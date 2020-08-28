const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    //type: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);