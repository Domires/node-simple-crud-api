const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

// db
mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to the database')
})

// middlewares
app.use(express.json())

// routes
app.use('/api', routes)

// listen port
const PORT = 3001
app.set('port', PORT)
app.listen(app.get('port'), console.log(`server running on port ${PORT}`))