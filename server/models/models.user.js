const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function(email) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
            },
            message: `format email salah`
        },
    },
    role: {
        type: String,
        required: true
    },
    createdAt: Date,
    updatedAt: Date,
    transaction: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Transaction'
        }
    ]
})


module.exports = mongoose.model('User', User)
