'use strict';

var mongoose = require('../utils/db');


var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var accountSchema = new Schema({
    number: { type: Number, index: { unique: true, dropDups: true } },
    owner_type: String,
    owner_id: Number
});

var Account = mongoose.model('Account', accountSchema);

function getAccounts(filter, resultsCallback){
    filter =  filter || {};

    Account.find(filter, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function getAccount(_id, resultsCallback){
    Account.findById(_id, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function create(attrs, resultsCallback){
    var account = new Account(attrs);

    account.save(function(err) {
      if (err) return resultsCallback(err, null);

      getAccount(account, resultsCallback);
    });
}

function update(_id, attrs, resultsCallback){
    Account.findByIdAndUpdate(_id, attrs, resultsCallback)
}

function destroy(_id, resultsCallback){
    Account.findByIdAndRemove(_id, resultsCallback)
}

var methods = {
    getAccount: getAccount,
    getAccounts: getAccounts,
    create: create,
    update: update,
    destroy: destroy
}

module.exports =  methods;