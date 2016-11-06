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

    },
    deleteUser: function (req, res) {

    },
    updateUser: function (req, res) {

    }
}