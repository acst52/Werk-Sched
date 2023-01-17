// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
// OK so first of all, our daily schedule is going to have 1-hour long blocks of time that span 9AM-5PM.
  // Each hour block is going to have its own div, and its own unique div ID, as specified in the HTML.
  // Each block needs a start and an end time so Javascript knows when to change its color. 
  // We should therefore store the div times as an object!

let divTimes = {
    div1: {
      start: dayjs("9:00 AM", "format like hh:mm? have to look at doc'n"),
      end: dayjs("10:00 AM", "format")
    },
    div2: {
      start: dayjs("10:00 AM", "format"),
      end: dayjs("11:00 AM", "format")
    }
    div3: {
      start: dayjs("11:00 AM", "format"),
      end: dayjs("11:59 AM", "format")
    },
    div4: {
      start: dayjs("12:01 PM", "format"),
      end: dayjs("1:00 PM", "format")
    },
    div5: {
      start: dayjs("1:00 PM", "format"),
      end: dayjs("2:00 PM", "format")
    },
    div6: {
      start: dayjs("2:00 PM", "format"),
      end: dayjs("3:00 PM", "format")
    },
    div7: {
      start: dayjs("3:00 PM", "format"),
      end: dayjs("4:00 PM", "format")
    },
    div8: {
      start: dayjs("4:00 PM", "format"),
      end: dayjs("5:00 PM", "format")
    }
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

// We want to loop through the divTimes obj above and change the diff div's colors dep
// on before/during/after the CURRENT time... So sounds like it needs to be a for-loop.

// for (VARIABLE in OBJECT) { code } --> (let id in divTimes) --> means that the loop 
  // will iterate over the keys of the divTims Obj, and the variable "id" will be 
  // assigned the value of each key name. More specifically, (let id in divTimes) is 
  // telling our for loop to iterate over each id in the object above. so it will 
  // iterate over each time block, div1, div2 ... div8.

for (let id in divTimes) {
  let currentTime = dayjs();
  let startTime = divTimes[id].start;
  let endTime = divTimes[id].end;

  if (currentTime.isBefore(startTime)) {
    document.getElementById(id).style.backgroundColor = "green";
  } else if (currentTime.isSame(startTime)) {
    document.getElementById(id).style.backgroudColor = "red";
  } else {
    document.getElementById(id).style.backgroundColor = "grey";
  }
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.

});
