'use strict';


var express = require('express');
var router = express.Router();

var controller = require('../controllers/transactions');

router.get('/', controller.getTransactions);
router.post('/', controller.createTransaction);
router.get('/:id', controller.getTransaction);
router.put('/:id', controller.updateTransaction);
router.delete('/:id', controller.deleteTransaction);

module.exports = router;