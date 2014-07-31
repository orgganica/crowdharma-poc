'use strict';

var user = require('../models/user');

function getUsers(req, res) {
  res.contentType = 'json';
  user.getUsers(function(err, results){
    if (err) {
      res.send(err);
    } else {
      res.send({ users : results });
    }
  });
};

function getUser(req, res) {
  res.contentType = 'json';
  user.getUser(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ user : result });
    }
  });
};

function createUser(req, res) {
  res.contentType = 'json';
  user.create(req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ user : result });
    }
  });
};

function updateUser(req, res){
  res.contentType = 'json';
  user.update(req.params.id, req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ user : result });
    }
  });
};

function deleteUser(req, res){
  res.contentType = 'json';
  user.destroy(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ user : result });
    }
  });
};

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};
