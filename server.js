require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000
const Dog = require("./models/Dogs")

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"));

const DogsCtrl = require('./controllers/dogs')
app.use('/', DogsCtrl)



app.listen(PORT, () => {
    console.log('Listening on the port 3000')
})