const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    // with everey goal we see which user created the goal
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // we use ,because which model objectId pretend to
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true // it automatically create update and create 
})

module.exports = mongoose.model('goals', goalSchema)