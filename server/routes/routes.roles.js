var express = require('express');
var router = express.Router();
var roleController = require('../controllers/controller.api.role')

router.post('/create', roleController.addRole)
router.get('/', roleController.getRole)

module.exports = router;