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

    },

    getRoleById: function (req, res) {

    },

    deleteRole: function (req, res) {

    },

    updateRole: function (req, res) {

    }
}