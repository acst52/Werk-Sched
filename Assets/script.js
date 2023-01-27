// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
// First, let's get the current date & time to display in the header:

let currentDay = document.getElementById("currentDay");

// let's update the time every 30 seconds?
setInterval(() => {
  currentDay.innerHTML = dayjs().format("MMMM D, YYYY hh:mm A");
}, 1000);

// let's add and remove the past/present/future classes based on time:
function hourUpdater() {
let currentHour = dayjs().hour();
// for (let id in divTimes) {
//   let hour = parseInt(id.split("-")[1]);
//   let div = document.getElementById(id);
$(".time-block").each(function(){ // loop though each of the time blocks
const hour = parseInt($(this).attr("id").split("-")[1]); // split id to get hour to compare to curr hour:
   if (hour < currentHour) {
    $(this).addClass("past");
      } else if (hour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
      } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    }
  })
}
hourUpdater();
setInterval(hourUpdater, 10000);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});
