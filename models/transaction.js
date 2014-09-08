'use strict';

var mongoose = require('../utils/db');


var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var transactionSchema = new Schema({
    from_account_id:  Number,
    to_account_id: Number,
    created_at: { type: Date, default: Date.now },
    amount: Number,
    task_id: Number
});

var Transaction = mongoose.model('Transaction', transactionSchema);

function getTransactions(filter, resultsCallback){
    filter =  filter || {};

    Transaction.find(filter, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function getTransaction(_id, resultsCallback){
    Transaction.findById(_id, function(err, result){
      if (resultsCallback && typeof(resultsCallback === "function")) {
        resultsCallback(err, result);
      }
    });
}

function create(attrs, resultsCallback){
    var transaction = new Transaction(attrs);

    transaction.save(function(err) {
      if (err) return resultsCallback(err, null);

      getTransaction(transaction, resultsCallback);
    });
}

function update(_id, attrs, resultsCallback){
    Transaction.findByIdAndUpdate(_id, attrs, resultsCallback)
}

function destroy(_id, resultsCallback){
    Transaction.findByIdAndRemove(_id, resultsCallback)
}

var methods = {
    getTransaction: getTransaction,
    getTransactions: getTransactions,
    create: create,
    update: update,
    destroy: destroy
}

module.exports =  methods;