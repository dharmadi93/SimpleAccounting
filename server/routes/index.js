var express = require('express');
var router = express.Router();
var userController = require('../controllers/controller.api.users')
var transactionController = require('../controllers/controller.api.transaction')

/* GET home page. */
router.post('/user/create', userController.addUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUsersById)
router.delete('/user/delete/:id', userController.deleteUser)
router.put('/user/update/:id', userController.updateUser)

router.post('/transaction/create', transactionController.addTransaction)
router.get('/transaction' ,transactionController.getTransaction)

module.exports = router;
