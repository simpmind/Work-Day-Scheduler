// display current date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function() {
    //  save button listener
    $(".saveBtn").on("click", function () {
        // Get time which is the grandparent of the save button 
       
        var time = $(this).parent().parent().attr("id");

        // Get descripton which is the uncle of the save button 
        var desc = $(this).parent().siblings(".description").text();
        // save time and description to local storage
        localStorage.setItem(time, desc);
    })
   // display rows by color base on current past and future time frame
    function timeDisplay() {
        //get current number of hours.
        var currentTime = moment().hour();

        
        $(".output").each(function () {
        
            var blockTime = moment($(this).attr("id"), ["hA"]).hour()
            // To check the time and add the classes for background indicators
            if (blockTime < currentTime) {
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })
    }
 
  
    $("#hour9  .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

timeDisplay();
})