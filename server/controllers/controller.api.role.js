const Role = require('../models/models.role')

module.exports = {
    addRole: function (req, res) {
        const role = {
            role: req.body.role,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        Role.create(role, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getRole: function (req, res) {
        Role.find(function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getRoleById: function (req, res) {
        Role.findOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    deleteRole: function (req, res) {
        Role.findOneAndRemove({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    updateRole: function (req, res) {
        Role.findOneAndUpdate({
            _id: req.params.id
        }, {
            role: req.body.role,
            updatedAt: Date.now()
        }, {
            new: true,
            upsert: true
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    }
}