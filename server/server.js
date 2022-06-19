const express = require('express')
const app = express()
const api = require('./routes/transactionApi')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', api)


mongoose.connect('mongodb://localhost/transactionDB')

const port = 3060
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})