'use strict';

var express = require('express');
var router = express.Router();

var controller = require('../controllers/accounts');

router.get('/', controller.getAccounts);
router.post('/', controller.createAccount);
router.get('/:id', controller.getAccount);
router.put('/:id', controller.updateAccount);
router.delete('/:id', controller.deleteAccount);

module.exports = router;
