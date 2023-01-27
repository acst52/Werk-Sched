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
  
  // lets add and remove the past/present/future classes based on time:
  function hourUpdater() {
  let currentHour = dayjs().hour();
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
  
// Now lets add a click event listener to each save button that triggers a fcn which:
  // 1. grabs the user's text input from each description,
  // 2. associates their input with the divID of its parent, and finally
  // 3. saves the div ID + user input to local storage:
  let saveButtons = document.getElementsByClassName("saveBtn");
  for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", function() {
      let textArea = this.parentNode.getElementsByClassName("description")[0];
      let userInput = textArea.value;
        console.log(userInput);
      let divID = this.parentNode.id;
        console.log(divID);
      localStorage.setItem(divID, userInput);
    });
  }
  
  // Finally, let's render user's saved input onto the divs using localStorage.getItem(key) method.
    // key = div id; we want to set value of textarea element as stored userInput from above.
  
  let textAreas = document.getElementsByClassName("description");
  for (let i = 0; i < textAreas.length; i++) {
    let divID = textAreas[i].parentNode.id;
    let savedInput = localStorage.getItem(divID);
    if (savedInput) {
      textAreas[i].value = savedInput;
    }
  }
    
  }); // this closes the $function at start of script
