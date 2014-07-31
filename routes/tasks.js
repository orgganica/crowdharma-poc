'use strict';


var express = require('express');
var router = express.Router();

var controller = require('../controllers/tasks');

router.get('/', controller.getTasks);
router.post('/', controller.createTask);
router.get('/:id', controller.getTask);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);


module.exports = router;