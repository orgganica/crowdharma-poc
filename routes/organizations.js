'use strict';

var express = require('express');
var router = express.Router();

var controller = require('../controllers/organizations');

router.get('/', controller.getOrganizations);
router.post('/', controller.createOrganization);
router.get('/:id', controller.getOrganization);
router.put('/:id', controller.updateOrganization);
router.delete('/:id', controller.deleteOrganization);

module.exports = router;
