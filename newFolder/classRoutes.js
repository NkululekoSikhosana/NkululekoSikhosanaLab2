'use strict'

let path = require('path')
let express = require('express')
let router = express.Router()
let classList = require('classList.js')

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, 
  res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/api/list', function (req, res) {
  res.json(classList)
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id])
})

router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.student)
  classList.push(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  let checkStudent = req.body.student.toLowerCase()
  classList.forEach(function (item, index, array) {
    if (checkStudent === item.toLowerCase()) {
      classList.splice(index, 1)
      console.log('Delete the following student:', req.body.student)
      res.redirect(req.baseUrl + '/api/list')
    } else res.redirect(req.baseUrl + '/delete')
  })
})

router.post('/api/edit', function (req, res) {
  let checkStudent = req.body.studentToEdit.toLowerCase()
  classList.forEach(function (item, index, array) {
    if (checkStudent === item.toLowerCase()) {
      classList[index] = req.body.change
      console.log('Changing:', req.body.studentToEdit, '\t to:', req.body.student)
      res.redirect(req.baseUrl + '/api/list')
    } else res.redirect(req.baseUrl + '/edit')
  })
})

module.exports = router
