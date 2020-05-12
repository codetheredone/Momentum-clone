
// Time logic to display live time

function formatAMPM() {
  const date = new Date();
  let hours = date.getHours();
  let days = date.getDay();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = `${hours}:${minutes}`;
  document.title = strTime;
  document.getElementById("time-display").innerHTML = strTime;
}

setInterval(formatAMPM, 10);

// Drink Bottle click hide

$(".bottle").click(function () {
  $(this).hide();
});

// Change background button


// Quote generation logic


// Show tempeture - hardcoded zipcode - Later it will ask for the zipcode and then it will take that as the location

