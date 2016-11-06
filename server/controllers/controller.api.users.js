const User = require('../models/models.user')

module.exports = {
    addUser: function (req, res) {
        const user = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }

        User.create(user, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },
    getUsers: function (req, res) {
        User.find(function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },
    getUsersById: function (req, res) {
        User.findOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },
    deleteUser: function (req, res) {
        User.findOneAndRemove({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },
    updateUser: function (req, res) {
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }, {
            new: true,
            upsert: true
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    }
}