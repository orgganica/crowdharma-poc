'use strict';

var transaction = require('../models/transaction');

function getTransactions(req, res) {
  res.contentType = 'json';
  transaction.getTransactions(function(err, results){
    if (err) {
      res.send(err);
    } else {
      res.send({ transactions : results });
    }
  });
};

function getTransaction(req, res) {
  res.contentType = 'json';
  transaction.getTransaction(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ transaction : result });
    }
  });
};

function createTransaction(req, res) {
  res.contentType = 'json';
  transaction.create(req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ transaction : result });
    }
  });
};

function updateTransaction(req, res){
  res.contentType = 'json';
  transaction.update(req.params.id, req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ transaction : result });
    }
  });
};

function deleteTransaction(req, res){
  res.contentType = 'json';
  transaction.destroy(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ transaction : result });
    }
  });
};

module.exports = {
  getTransactions: getTransactions,
  getTransaction: getTransaction,
  createTransaction: createTransaction,
  updateTransaction: updateTransaction,
  deleteTransaction: deleteTransaction
};