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
var time9 = startTime.add(0, "h");
time9= time9.format('hh A');
$("#block9").text(time9);

//10am
var time10 = startTime.add(1, "h");
time10= time10.format('hh A');
$("#block10").text(time10);

//11am
var time11 = startTime.add(1, "h");
time11= time11.format('hh A');
$("#block11").text(time11);

//12pm
var time12 = startTime.add(1, "h");
time12= time12.format('hh A');
$("#block12").text(time12);

//13pm
var time13 = startTime.add(1, "h");
time13= time13.format('hh A');
$("#block13").text(time13);

//14pm
var time14 = startTime.add(1, "h");
time14= time14.format('hh A');
$("#block14").text(time14);

//15pm
var time15 = startTime.add(1, "h");
time15= time15.format('hh A');
$("#block15").text(time15);

//16pm
var time16 = startTime.add(1, "h");
time16= time16.format('hh A');
$("#block16").text(time16);

//17pm
var time17 = startTime.add(1, "h");
time17= time17.format('hh A');
$("#block17").text(time17);

// save content to time block with event listener:
$(".saveBtn").click(function(event) {
    event.preventDefault();

    var blockText = $(this).siblings(".form-control").val();
    //console.log(blockText);
    var blockHour = $(this).parent().data("hour");
    //console.log(blockHour);
    localStorage.setItem(blockHour, blockText);
});

// load the blocks details from local storage
var timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < localStorage.length; i++) {
    var blockHour = localStorage.getItem(timeBlocks[i]);
    //console.log(blockHour);
    $("#form" + timeBlocks[i]).val(blockHour);
};

// create function to display time block colors (past-present-future)
// must compare current time to each ime blocks
function compareTime() {
    
    currentTime = moment().startOf("hour");

    //9am
    time9 = moment().startOf('day').add(9, "hours");
    if (currentTime.isAfter(time9)) {
        $("#form9").addClass("past");
    }
    else if (currentTime.isSame(time9)) {
        $("#form9").addClass("present");
    }
    else if (currentTime.isBefore(time9)) {
        $("#form9").addClass("future");
    };

    //10am
    time10 = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(time10)) {
        $("#form10").addClass("past");
    }
    else if (currentTime.isSame(time10)) {
        $("#form10").addClass("present");
    }
    else if (currentTime.isBefore(time10)) {
        $("#form10").addClass("future");
    };

    //11am
    time11 = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(time11)) {
        $("#form11").addClass("past");
    }
    else if (currentTime.isSame(time11)) {
        $("#form11").addClass("present");
    }
    else if (currentTime.isBefore(time11)) {
        $("#form11").addClass("future");
    };

    //12pm
    time12 = moment().startOf('day').add(12, "hours");
    if (currentTime.isAfter(time12)) {
        $("#form12").addClass("past");
    }
    else if (currentTime.isSame(time12)) {
        $("#form12").addClass("present");
    }
    else if (currentTime.isBefore(time12)) {
        $("#form12").addClass("future");
    };

    //13pm
    time13 = moment().startOf('day').add(13, "hours");
    if (currentTime.isAfter(time13)) {
        $("#form13").addClass("past");
    }
    else if (currentTime.isSame(time13)) {
        $("#form13").addClass("present");
    }
    else if (currentTime.isBefore(time13)) {
        $("#form13").addClass("future");
    };

    //14Pm
    time14 = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(time14)) {
        $("#form14").addClass("past");
    }
    else if (currentTime.isSame(time14)) {
        $("#form14").addClass("present");
    }
    else if (currentTime.isBefore(time14)) {
        $("#form14").addClass("future");
    };

    //15Pm
    time15 = moment().startOf('day').add(15, "hours");
    if (currentTime.isAfter(time15)) {
        $("#form15").addClass("past");
    }
    else if (currentTime.isSame(time15)) {
        $("#form15").addClass("present");
    }
    else if (currentTime.isBefore(time15)) {
        $("#form15").addClass("future");
    };

    //16Pm
    time16 = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(time16)) {
        $("#form16").addClass("past");
    }
    else if (currentTime.isSame(time16)) {
        $("#form16").addClass("present");
    }
    else if (currentTime.isBefore(time16)) {
        $("#form16").addClass("future");
    };

    //17Pm
    time17 = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(time17)) {
        $("#form17").addClass("past");
    }
    else if (currentTime.isSame(time17)) {
        $("#form17").addClass("present");
    }
    else if (currentTime.isBefore(time17)) {
        $("#form17").addClass("future");
    };
}
compareTime();

