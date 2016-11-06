var express = require('express');
var router = express.Router();
var userController = require('../controllers/controller.api.users')

/* GET home page. */
router.post('/user/create', userController.addUser)

module.exports = router;
