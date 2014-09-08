'use strict';

var account = require('../models/account');

function getAccounts(req, res) {
  res.contentType = 'json';
  account.getAccounts(function(err, results){
    if (err) {
      res.send(err);
    } else {
      res.send({ accounts : results });
    }
  });
};

function getAccount(req, res) {
  res.contentType = 'json';
  account.getAccount(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ account : result });
    }
  });
};

function createAccount(req, res) {
  res.contentType = 'json';
  account.create(req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ account : result });
    }
  });
};

function updateAccount(req, res){
  res.contentType = 'json';
  account.update(req.params.id, req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ account : result });
    }
  });
};

function deleteAccount(req, res){
  res.contentType = 'json';
  account.destroy(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ account : result });
    }
  });
};

module.exports = {
  getAccounts: getAccounts,
  getAccount: getAccount,
  createAccount: createAccount,
  updateAccount: updateAccount,
  deleteAccount: deleteAccount
};