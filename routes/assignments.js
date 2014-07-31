'use strict';

var express = require('express');
var router = express.Router();

var controller = require('../controllers/assignments');

router.get('/', controller.getAssignments);
router.post('/', controller.createAssignment);
router.get('/:id', controller.getAssignment);
router.put('/:id', controller.updateAssignment);
router.delete('/:id', controller.deleteAssignment);

module.exports = router;
