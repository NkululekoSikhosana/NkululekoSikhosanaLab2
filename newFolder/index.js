'use strict'

let path = require('path')
let express = require('express')
let app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
console.log('Express server running on port 3000')
