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

'use strict'

fetch('/class/api/list') // Returns a Promise for the GET request
  .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok) { return response.json() } // Return the response parse as JSON if code is valid
    else { throw 'Failed to load classlist: response code invalid!' }
  })
  .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
    let classList = document.getElementById('classList')
    // Iterate through all students
    data.forEach(function (student) {
      // Create a new list entry
      let li = document.createElement('LI')
      let liText = document.createTextNode(student)
      // Append the class to the list element
      li.className += 'student'
      // Append list text to list item and list item to list
      li.appendChild(liText)
      classList.appendChild(li)
    })
  })
  .catch(function (e) { // Process error for request
    alert(e) // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    // catch() function.
  })
