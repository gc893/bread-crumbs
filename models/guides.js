const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment: {type: String, required: true},
    score: {type: Number}
}, {
    timestamps: true
});

const stepSchema = new mongoose.Schema({
    description: {type: String, required: true},
    image: {type: String},
    code_block: {type: String}
}, {
    timestamps: true
});

const guideSchema = new mongoose.Schema({
    title: {type: String, required: true},
    action: {type: String, required: true},
    app_component: {type: String, required: true},
    steps: [stepSchema],
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Guide', guideSchema);