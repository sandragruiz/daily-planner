// Variables

var saveBtnEl = $('.saveBtn');
var timeBlockEl = $('.time-block');

// Set and display current date 

var today = dayjs();
  $('#currentDay').text(today);

// Event listener for clicking on save button

$(document).ready(function() {
  saveBtnEl.on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    //set local storage key value pairs
    localStorage.setItem(time, JSON.stringify(text));
})

  function timeTracker() {
    var currentTime = dayjs().hour(); // get current hour
    
    timeBlockEl.each(function () {  // check conditions for time blocks
      var blockTime = parseInt($(this).attr('id').split('hour')[1]);

      if (blockTime<currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
    
      } else if (blockTime===currentTime) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
        }) 
          }

  //Get user input through local storage

    $('#hour-9 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-10 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-11 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-12 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-13 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-14 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-15 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-16 .description').JSON.parse(localStorage.getItem(time, text));
    $('#hour-17 .description').JSON.parse(localStorage.getItem(time, text)); 
    
    timeTracker();
 
  })
