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
    localStorage.setItem(time, text);
})

  function timeTracker() {
    var currentTime = dayjs().hour(); // get current hour
    
    timeBlockEl.each(function () {  // check conditions for time blocks
      var blockTime = parseInt($(this).attr('id').split('-')[1]);
      var storedEntry = localStorage.getItem($(this).attr('id'))
      $(this).children("textarea").val(storedEntry)

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
    
    timeTracker();
 
  })

  