'use strict';

var assignment = require('../models/assignment');

function getAssignments(req, res) {
  res.contentType = 'json';
  assignment.getAssignments(function(err, results){
    if (err) {
      res.send(err);
    } else {
      res.send({ assignments : results });
    }
  });
};

function getAssignment(req, res) {
  res.contentType = 'json';
  assignment.getAssignment(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ assignment : result });
    }
  });
};

function createAssignment(req, res) {
  res.contentType = 'json';
  assignment.create(req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ assignment : result });
    }
  });
};

function updateAssignment(req, res){
  res.contentType = 'json';
  assignment.update(req.params.id, req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ assignment : result });
    }
  });
};

function deleteAssignment(req, res){
  res.contentType = 'json';
  assignment.destroy(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ assignment : result });
    }
  });
};

module.exports = {
  getAssignments: getAssignments,
  getAssignment: getAssignment,
  createAssignment: createAssignment,
  updateAssignment: updateAssignment,
  deleteAssignment: deleteAssignment
};