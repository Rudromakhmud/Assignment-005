const Addnumber = document.getElementById("Addnumber");
const Task = document.getElementById("Task");
const Completebtn = document.getElementById("Completebtn");

let currentValue = parseInt(Addnumber.textContent); // Get initial value as a number
let taskValue = parseInt(Task.textContent);

Completebtn.addEventListener("click", function() {
  currentValue++; // Increment the value
  taskValue--;
  Addnumber.textContent = currentValue; // Update the display
  Task.textContent = taskValue;
  Completebtn.disabled = true; // Disable the button
});

document.getElementById("Completebtn").addEventListener("click", function() {
  alert("You have Complete The Task Fix Mobile Button Issue at 12:48:15 PM");
});

function CompleteButtonFunction(e){
   document.getElementsByClassName(e)[0].disabled = true;
   currentValue++; // Increment the value
   taskValue--;
   Addnumber.textContent = currentValue; // Update the display
   Task.textContent = taskValue;
   alert("You have Complete The Task Add Dark Mode Issue at 12:48:15 PM");
}
function CompleteButtonFunction1(e){
  document.getElementsByClassName(e)[0].disabled = true;
  currentValue++; // Increment the value
  taskValue--;
  Addnumber.textContent = currentValue; // Update the display
  Task.textContent = taskValue;
  alert("You have Complete The Task Optimize Home page at 12:48:15 PM");
}
function CompleteButtonFunction2(e){
  document.getElementsByClassName(e)[0].disabled = true;
  currentValue++; // Increment the value
  taskValue--;
  Addnumber.textContent = currentValue; // Update the display
  Task.textContent = taskValue;
  alert("You have Complete The Task Add new emoji 🤲 at 12:48:15 PM");
}
function CompleteButtonFunction3(e){
  document.getElementsByClassName(e)[0].disabled = true;
  currentValue++; // Increment the value
  taskValue--;
  Addnumber.textContent = currentValue; // Update the display
  Task.textContent = taskValue;
  alert("You have Complete The Task Integrate OpenAI API at 12:48:15 PM");
}





function ClearNotification(){
document.getElementById('NotificationPanel').innerHTML='';
}
