'use strict';

var mongoose = require('../utils/db');


var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var taskSchema = new Schema({
    owner_type:  String,
    owner_id: Number,
    name: String,
    description: String,
    created_at: { type: Date, default: Date.now },
    status: String,
    reward: Number
});

var Task = mongoose.model('Task', taskSchema);

function getTasks(filter, resultsCallback){
    filter =  filter || {};

    Task.find(filter, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function getTask(_id, resultsCallback){
    Task.findById(_id, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function create(attrs, resultsCallback){
    var task = new Task(attrs);

    task.save(function(err) {
      if (err) return resultsCallback(err, null);

      getTask(task, resultsCallback);
    });
}

function update(_id, attrs, resultsCallback){
    Task.findByIdAndUpdate(_id, attrs, resultsCallback)
}

function destroy(_id, resultsCallback){
    Task.findByIdAndRemove(_id, resultsCallback)
}

var methods = {
    getTask: getTask,
    getTasks: getTasks,
    create: create,
    update: update,
    destroy: destroy
}

module.exports =  methods;