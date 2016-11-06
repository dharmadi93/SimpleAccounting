const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Role = new Schema({
    role: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model('Role', Role)