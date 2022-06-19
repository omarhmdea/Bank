const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/transactionDB')

const Schema = mongoose.Schema

const transactionSchema = new Schema({
    id: String,
    amount: Number,
    vendor: String,
    category: String
});

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction