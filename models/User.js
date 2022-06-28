const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min:4,
    },username: {
        type: String,
        required: true,
        max: 255,
        min:4,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8,
    },
    date:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('User', userSchema)