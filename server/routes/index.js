var express = require('express');
var router = express.Router();
var userController = require('../controllers/controller.api.users')

/* GET home page. */
router.post('/user/create', userController.addUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUsersById)
router.delete('/user/delete/:id', userController.deleteUser)

module.exports = router;
