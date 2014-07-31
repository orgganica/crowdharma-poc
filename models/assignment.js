'use strict';

var mongoose = require('../utils/db');


var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var assigmentSchema = new Schema({
    task_id:  Number,
    user_id: Number
});

var Assigment = mongoose.model('Assigment', assigmentSchema);

function getAssigments(filter, resultsCallback){
    filter =  filter || {};

    Assigment.find(filter, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function getAssigment(_id, resultsCallback){
    Assigment.findById(_id, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function create(attrs, resultsCallback){
    var assigment = new Assigment(attrs);

    assigment.save(function(err) {
      if (err) return resultsCallback(err, null);

      getAssigment(assigment, resultsCallback);
    });
}

function update(_id, attrs, resultsCallback){
    Assigment.findByIdAndUpdate(_id, attrs, resultsCallback)
}

function destroy(_id, resultsCallback){
    Assigment.findByIdAndRemove(_id, resultsCallback)
}

var methods = {
    getAssigment: getAssigment,
    getAssigments: getAssigments,
    create: create,
    update: update,
    destroy: destroy
}

module.exports =  methods;