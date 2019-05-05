'use strict'

const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}

const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}

const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}

const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}

let students = [{
  name: 'Kwezi',
  studentNumber: 453528,
  yearOfStudy: 4,
  electives: [electiveOne, electiveTwo, electiveThree]
},
{
  name: 'Pieter',
  studentNumber: 454345,
  yearOfStudy: 3,
  electives: [electiveOne, electiveTwo, electiveFour]
},
{
  name: 'Jade',
  studentNumber: 678343,
  yearOfStudy: 4,
  electives: [electiveTwo, electiveThree, electiveFour]
},
{
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4,
  electives: [electiveOne, electiveTwo, electiveThree]
}]

let filterName = ''

document.querySelector('#search-text').addEventListener('input', function (e) {
  document.getElementById('students').innerHTML = ''
  filterName = document.getElementById('search-text').value
  let newList = []

  if (filterName === '') {
    newList = students

    newList.forEach(function (element) {
      let paragraph = document.createElement('p')

      if (filterName.length === 0) {
        filterName = 'name'
      }
      let text = document.createTextNode(element[filterName])
      let listOfStudents = document.getElementById('students')
      paragraph.appendChild(text)
      listOfStudents.appendChild(paragraph)
    })
  } else {
    const result = students.filter(function (student) {
      return student.name === filterName
    })
    if (result.length === 0) {
      let paragraph = document.createElement('p')

      let text = document.createTextNode('the student is not found')
      let listOfStudents = document.getElementById('students')
      paragraph.appendChild(text)
      listOfStudents.appendChild(paragraph)
    } else {
      result.forEach(function (element) {
        let paragraph = document.createElement('p')

        let text = document.createTextNode(element.name)
        let listOfStudents = document.getElementById('students')
        paragraph.appendChild(text)
        listOfStudents.appendChild(paragraph)
      })
    }
  }
})
