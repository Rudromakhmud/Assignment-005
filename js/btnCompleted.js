const Addnumber = document.getElementById("Addnumber");
const Completebtn = document.getElementById("Completebtn");

let currentValue = parseInt(Addnumber.textContent); // Get initial value as a number

Completebtn.addEventListener("click", function() {
  currentValue++; // Increment the value
  Addnumber.textContent = currentValue; // Update the display
  Completebtn.disabled = true; // Disable the button
});

document.getElementById("Completebtn").addEventListener("click", function() {
  alert("You have Complete The Task Fix Mobile Button Issue at 12:48:15 PM");
});