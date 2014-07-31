'use strict';

var organization = require('../models/organization');

function getOrganizations(req, res) {
  res.contentType = 'json';
  organization.getOrganizations(function(err, results){
    if (err) {
      res.send(err);
    } else {
      res.send({ organizations : results });
    }
  });
};

function getOrganization(req, res) {
  res.contentType = 'json';
  organization.getOrganization(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ organization : result });
    }
  });
};

function createOrganization(req, res) {
  res.contentType = 'json';
  organization.create(req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ organization : result });
    }
  });
};

function updateOrganization(req, res){
  res.contentType = 'json';
  organization.update(req.params.id, req.body, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ organization : result });
    }
  });
};

function deleteOrganization(req, res){
  res.contentType = 'json';
  organization.destroy(req.params.id, function(err, result){
    if (err) {
      res.send(err);
    } else {
      res.send({ organization : result });
    }
  });
};

module.exports = {
  getOrganizations: getOrganizations,
  getOrganization: getOrganization,
  createOrganization: createOrganization,
  updateOrganization: updateOrganization,
  deleteOrganization: deleteOrganization
};