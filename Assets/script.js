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


// We want to loop through the divTimes obj above and change the diff div's colors
// depending on the CURRENT time... So sounds like it needs to be a for-loop:

  let currentTime = dayjs();

  let startTime = dayjs("9:00 AM", "hh:mm:ss A");
  let endTime = dayjs("5:00 PM", "hh:mm:ss A");

  if (currentTime.isBefore(startTime) || currentTime.isAfter(endTime)) {
    // current time is outside div range, so set the box color to green!
    document.getElementById("div id").style.backgroundColor = "green";
  }else{
    // current time is within div range, so set the box color to red!
    document.getElementById("div id").style.backgroundColor = "red";
  }

// We want the browser to check the time and change div colors often, which sounds like a setInterval fcn...

setInterval(function () {
  let currentTime = dayjs();
  let startTime = dayjs("9:00 AM", "hh:mm:ss A");
  let endTime = dayjs("5:00 PM", "hh:mm:ss A");

  if (currentTime.isBefore(startTime) || currentTime.isAfter(endTime)) {
    document.getElementById("div id").style.backgroundColor = "green";
  }else{
    document.getElementById("div id").style.backgroundColor = "red";
  }
  }, 10000);  // 10,000 means run this every 10 seconds, so every 10 sec, 
              // time is checked and box color changed accordingly.
})


  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});






// CODE BELOW IS FROM DAY.JS CLASS NOTES:

// Use Day.js to format the following variables:

// 1. What is your graduation date in the following format: Jan 1, 1999?
var gradDate = dayjs('2023-06-15').format('MMM D, YYYY');
$('#1a').text(gradDate);

// 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var weekDay = dayjs('01-01-2027', 'M-D-YYYY').format('dddd');
$('#2a').text(weekDay);

// 3. What is the current time in the format: hours:minutes:seconds
var time = dayjs().format('hh:mm:ss');
$('#3a').text(time);

// 4. What is the current Unix timestamp?
var unix = dayjs().unix();
$('#4a').text(unix);

// 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = dayjs.unix(1318781876).format('MMM D, YYYY, hh:mm:ss a');
$('#5a').text(unixFormat);

// 6. What is the difference in days between May 4, 2027 and today?
var targetDay = dayjs('2027-05-04');
var today = dayjs();
var days = targetDay.diff(today, 'day');
$('#6a').text(days);
