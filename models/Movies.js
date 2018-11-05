const mongoose = require('mongoose');
const { Schema } = mongoose;

var userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    }
})

module.exports = mongoose.model('movies', userSchema);