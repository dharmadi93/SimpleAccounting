const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Transaction = new Schema({
    transactionItems: [
        {
            name: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model('Transaction', Transaction)