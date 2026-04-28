function updateClock() {    // Function to update the clock
  var now = new Date()      // Get computers time
  var hours = document.querySelector('.hours')  // Get element in html

  hours.innerText = now.toLocaleTimeString().replace(/[AM, PM]/g, '') // Remove AM and PM
}

setInterval(updateClock, 1000)  // Run the function for 1 second
updateClock() // Start