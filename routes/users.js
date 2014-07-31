'use strict';


var express = require('express');
var router = express.Router();

var controller = require('../controllers/users');

router.get('/', controller.getUsers);
router.post('/', controller.createUser);
router.get('/:id', controller.getUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;