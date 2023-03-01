// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtnEl = $('.saveBtn');
var timeBlockEl = $('.time-block');

var today = dayjs();
  $('#currentDay').html(today);

$(document).ready(function() {
  saveBtnEl.on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function timeTracker() {
    var currentTime = dayjs().hour(); // gets current hour
    
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

    $('#hour-9 .description').val(localStorage).getItem('hour9');
    $('#hour-10 .description').val(localStorage).getItem('hour10');
    $('#hour-11 .description').val(localStorage).getItem('hour11');
    $('#hour-12 .description').val(localStorage).getItem('hour12');
    $('#hour-13 .description').val(localStorage).getItem('hour13');
    $('#hour-14 .description').val(localStorage).getItem('hour14');
    $('#hour-15 .description').val(localStorage).getItem('hour15');
    $('#hour-16 .description').val(localStorage).getItem('hour16');
    $('#hour-17 .description').val(localStorage).getItem('hour17'); 
    
    timeTracker();
 
  })
