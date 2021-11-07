// Moment current day and time:
moment(Date);

// insert current day, date, year to the placeholder id "currentDay":
$("#currentDay").text(moment().format('dddd[,] MMMM Do[,] YYYY'));

//Mutates the original moment by setting it to the start of hour (nearest hour):
var currentTime = moment().startOf("hour");
//console.log(currentTime);

//set the variable to the start of work day at 9AM:
var startTime = moment().startOf('day').add(9,"hours");

// below is to set the time to the time blocks placeholders (9am to 17pm) in HTML:
var time9Am = startTime.add(0, "h");
time9Am= time9Am.format('hh A');
$("#block9Am").text(time9Am);

var time10Am = startTime.add(1, "h");
time10Am= time10Am.format('hh A');
$("#block10Am").text(time10Am);

var time11Am = startTime.add(1, "h");
time11Am= time11Am.format('hh A');
$("#block11Am").text(time11Am);

var time12Pm = startTime.add(1, "h");
time12Pm= time12Pm.format('hh A');
$("#block12Pm").text(time12Pm);

var time13Pm = startTime.add(1, "h");
time13Pm= time13Pm.format('hh A');
$("#block13Pm").text(time13Pm);

var time14Pm = startTime.add(1, "h");
time14Pm= time14Pm.format('hh A');
$("#block14Pm").text(time14Pm);

var time15Pm = startTime.add(1, "h");
time15Pm= time15Pm.format('hh A');
$("#block15Pm").text(time15Pm);

var time16Pm = startTime.add(1, "h");
time16Pm= time16Pm.format('hh A');
$("#block16Pm").text(time16Pm);

var time17Pm = startTime.add(1, "h");
time17Pm= time17Pm.format('hh A');
$("#block17Pm").text(time17Pm);

// create function to display time block colors
// and to apply 