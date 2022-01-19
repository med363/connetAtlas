const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/DB.config.js')
const mongoose = require('mongoose')




// create express app
const app = express()


// setup server port
const port = 3001





// connection database
mongoose.connect(db.url).then(() => {
    console.log('connection succesfully')
}).catch(err => {
    console.log('failed connection', err)
    process.exit()
})






app.use(bodyParser.urlencoded({ extended: true }))
    // convertir la requette en json quelle que soit son type au debut
app.use(bodyParser.json())







app.get('/test', (req, res) => {
    res.json({ "message": "hi friends" })
})













app.listen(port, () => {
    console.log(`server listen on ${port}`);
})