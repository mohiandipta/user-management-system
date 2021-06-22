const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

exports.userSchema = mongoose.model('user', userSchema)
module.exports = userSchema