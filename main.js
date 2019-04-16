'use strict'

console.log('Loading a module')
let mod = require('./mod')
console.log('Mod:', mod)
console.log('Done')

let fs = require('fs')
fs.readFile('./ELEN4010.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
