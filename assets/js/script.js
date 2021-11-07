// Moment current day and time:
moment(Date);

// insert current day, date, year to the placeholder id "currentDay":
$("#currentDay").text(moment().format('dddd[,] MMMM Do[,] YYYY'));

//Mutates the original moment by setting it to the start of hour (nearest hour):
var currentTime = moment().startOf("hour");

//set the variable to the start of work day at 9AM:
var startTime = moment().startOf('day').add(9,"hours");

// below is to set the time to the time blocks placeholders (9am to 17pm) in HTML:

//9am
var time9Am = startTime.add(0, "h");
time9Am= time9Am.format('hh A');
$("#block9Am").text(time9Am);

//10am
var time10Am = startTime.add(1, "h");
time10Am= time10Am.format('hh A');
$("#block10Am").text(time10Am);

//11am
var time11Am = startTime.add(1, "h");
time11Am= time11Am.format('hh A');
$("#block11Am").text(time11Am);

//12pm
var time12Pm = startTime.add(1, "h");
time12Pm= time12Pm.format('hh A');
$("#block12Pm").text(time12Pm);

//13pm
var time13Pm = startTime.add(1, "h");
time13Pm= time13Pm.format('hh A');
$("#block13Pm").text(time13Pm);

//14pm
var time14Pm = startTime.add(1, "h");
time14Pm= time14Pm.format('hh A');
$("#block14Pm").text(time14Pm);

//15pm
var time15Pm = startTime.add(1, "h");
time15Pm= time15Pm.format('hh A');
$("#block15Pm").text(time15Pm);

//16pm
var time16Pm = startTime.add(1, "h");
time16Pm= time16Pm.format('hh A');
$("#block16Pm").text(time16Pm);

//17pm
var time17Pm = startTime.add(1, "h");
time17Pm= time17Pm.format('hh A');
$("#block17Pm").text(time17Pm);

// create function to display time block colors (past-present-future)
// must compare current time to each ime blocks
function compareTime() {
    
    currentTime = moment().startOf("hour");

    //9am
    time9Am = moment().startOf('day').add(9, "hours");
    if (currentTime.isAfter(time9Am)) {
        $("#form9Am").addClass("past");
    }
    else if (currentTime.isSame(time9Am)) {
        $("#form9Am").addClass("present");
    }
    else if (currentTime.isBefore(time9Am)) {
        $("#form9Am").addClass("future");
    };

    //10am
    time10Am = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(time10Am)) {
        $("#form10Am").addClass("past");
    }
    else if (currentTime.isSame(time10Am)) {
        $("#form10Am").addClass("present");
    }
    else if (currentTime.isBefore(time10Am)) {
        $("#form10Am").addClass("future");
    };

    //11am
    time11Am = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(time11Am)) {
        $("#form11Am").addClass("past");
    }
    else if (currentTime.isSame(time11Am)) {
        $("#form11Am").addClass("present");
    }
    else if (currentTime.isBefore(time11Am)) {
        $("#form11Am").addClass("future");
    };

    //12pm
    time12Pm = moment().startOf('day').add(12, "hours");
    if (currentTime.isAfter(time12Pm)) {
        $("#form12Pm").addClass("past");
    }
    else if (currentTime.isSame(time12Pm)) {
        $("#form12Pm").addClass("present");
    }
    else if (currentTime.isBefore(time12Pm)) {
        $("#form12Pm").addClass("future");
    };

    //13pm
    time13Pm = moment().startOf('day').add(13, "hours");
    if (currentTime.isAfter(time13Pm)) {
        $("#form13Pm").addClass("past");
    }
    else if (currentTime.isSame(time13Pm)) {
        $("#form13Pm").addClass("present");
    }
    else if (currentTime.isBefore(time13Pm)) {
        $("#form13Pm").addClass("future");
    };

    //14Pm
    time14Pm = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(time14Pm)) {
        $("#form14Pm").addClass("past");
    }
    else if (currentTime.isSame(time14Pm)) {
        $("#form14Pm").addClass("present");
    }
    else if (currentTime.isBefore(time14Pm)) {
        $("#form14Pm").addClass("future");
    };

    //15Pm
    time15Pm = moment().startOf('day').add(15, "hours");
    if (currentTime.isAfter(time15Pm)) {
        $("#form15Pm").addClass("past");
    }
    else if (currentTime.isSame(time15Pm)) {
        $("#form15Pm").addClass("present");
    }
    else if (currentTime.isBefore(time15Pm)) {
        $("#form15Pm").addClass("future");
    };

    //16Pm
    time16Pm = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(time16Pm)) {
        $("#form16Pm").addClass("past");
    }
    else if (currentTime.isSame(time16Pm)) {
        $("#form16Pm").addClass("present");
    }
    else if (currentTime.isBefore(time16Pm)) {
        $("#form16Pm").addClass("future");
    };

    //17Pm
    time17Pm = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(time17Pm)) {
        $("#form17Pm").addClass("past");
    }
    else if (currentTime.isSame(time17Pm)) {
        $("#form17Pm").addClass("present");
    }
    else if (currentTime.isBefore(time17Pm)) {
        $("#form17Pm").addClass("future");
    };
}
compareTime();

// save content to time block with event listener:
$(".saveBtn").click(function(event) {
    event.preventDefault();
});