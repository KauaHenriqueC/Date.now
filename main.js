function updateClock() {    // Function to update the clock
  var now = new Date()      // Get computers time
  var hours = document.querySelector('.hours')  // Get element in html

  hours.innerText = now.toLocaleTimeString().replace(/[AM, PM]/g, '') // Remove AM and PM
}
function updateDay() {
  var now = new Date()      // Get computers time
  var days = document.querySelector('.weakDay') // Get element in html

  switch (now.getDay()) { // Switch that shows the day according to the number of the weak
    case 0:
      days.innerText = "Sunday"
      break
    case 1:
      days.innerText = "Monday"
      break
    case 2:
      days.innerText = "Tuesday"
      break
    case 3:
      days.innerText = "Wednesday"
      break
    case 4:
      days.innerText = "Thursday"
      break
    case 5:
      days.innerText = "Friday"
      break
    case 6:
      days.innerText = "Saturday"
      break
    default:
      days.innerText = "Invalid Day"
  }
}

function updateDate() {
  var now = new Date()      // Get computers time
  var date = document.querySelector('.date') // Get element in html

  date.innerText = now.toLocaleDateString()
}
setInterval(updateClock, 1000)  // Run the function for 1 second
updateClock() // Shows Hours
updateDay() // Shows Day
updateDate() // Shows Date