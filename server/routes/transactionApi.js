const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router()

router.get('/transactions', async function (req, res) {
    try {
        res.status(200).send(await Transaction.find({}))

    } catch (error) {
        res.status(404).send({ message: error.message })

    }
})

router.post('/transaction', async function (req, res) {
    const transactionData = req.body
    const newTransaction = new Transaction(transactionData)

    try {
        new Transaction(transactionData).save()
        res.status(201).send(newTransaction)

    } catch (error) {
        res.status(409).send({ message: error.message })

    }
})

router.delete('/transaction', async function (req, res) {
    const transactionID = req.body.id

    try {
        await Transaction.find({ id: transactionID }).deleteOne()
        res.status(204).end()

    } catch (error) {
        res.status(404).send({ message: error.message })

    }
})

router.get('/grouptransaction', async function (req, res) {
    try {
        await Transaction.aggregate([
            {
                $group:
                {
                    _id: { category: "$category" },
                    totalBalance: { $sum: "$amount" }
                }
            }
        ])
            .then(result => {
                res.send(result)
            })

    } catch (error) {
        res.status(409).send({ message: error.message })

    }
})


module.exports = router