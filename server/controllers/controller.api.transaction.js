const Transaction = require('../models/models.transaction')

module.exports = {
    addTransaction: function (req, res) {
        const transaction = {
            transactionItems: {
                name: req.body.name,
                amount: req.body.amount,
                price: req.body.price
            },
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        
        Transaction.create(transaction, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getTransaction: function (req, res) {

    },

    getTransactionById: function (req, res) {

    },

    getTransactionByUserId: function (req, res) {

    }
}