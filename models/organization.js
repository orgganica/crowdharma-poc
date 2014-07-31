'use strict';

var mongoose = require('../utils/db');


var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var organizationSchema = new Schema({
    name:  String,
    dharma: Number
});

var Organization = mongoose.model('Organization', organizationSchema);

function getOrganizations(filter, resultsCallback){
    filter =  filter || {};

    Organization.find(filter, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function getOrganization(_id, resultsCallback){
    Organization.findById(_id, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function create(attrs, resultsCallback){
    var organization = new Organization(attrs);

    organization.save(function(err) {
      if (err) return resultsCallback(err, null);

      getOrganization(organization, resultsCallback);
    });
}

function update(_id, attrs, resultsCallback){
    Organization.findByIdAndUpdate(_id, attrs, resultsCallback)
}

function destroy(_id, resultsCallback){
    Organization.findByIdAndRemove(_id, resultsCallback)
}

var methods = {
    getOrganization: getOrganization,
    getOrganizations: getOrganizations,
    create: create,
    update: update,
    destroy: destroy
}

module.exports =  methods;