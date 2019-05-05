'use strict'

let path = require('path')
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let fetch = require('node-fetch')

// loading routers
let mainRouter = require('./mainRoutes')
let classRouter = require('./classRoutes.js')

// tell express to use bodyparser for JSON and URL encodded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mounting routers
app.use('/', mainRouter)
app.use('/class', classRouter)
app.use('/cdn', express.static('public'))
app.use('/cdn', express.static('public')) /* this will mount your public
directory to '/cdn'. i.e. your scripts folder will be at /cdn/scripts */

// let port = process.env.PORT || 3000
app.listen(3000)
console.log('Express server running on port 3000')
