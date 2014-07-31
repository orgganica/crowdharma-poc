'use strict';

var task = require('../models/task');

function getTasks(req, res) {
  res.contentType = 'json';
  task.getTasks(function(err, results){
    if (err) {
      res.send(err);
    } else {
      res.send({ tasks : results });
    }
  });
};

function getTask(req, res) {
  res.contentType = 'json';
  task.getTask(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ task : result });
    }
  });
};

function createTask(req, res) {
  res.contentType = 'json';
  task.create(req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ task : result });
    }
  });
};

function updateTask(req, res){
  res.contentType = 'json';
  task.update(req.params.id, req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ task : result });
    }
  });
};

function deleteTask(req, res){
  res.contentType = 'json';
  task.destroy(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ task : result });
    }
  });
};

module.exports = {
  getTasks: getTasks,
  getTask: getTask,
  createTask: createTask,
  updateTask: updateTask,
  deleteTask: deleteTask
};