$(document).ready(function() {

  // Portfolio Section Functionality
  $('.row--button1, .row--button2, .row--button3, .row--button4, .row--button5').click(function() {
      if ($(this).hasClass('row--button1')) {
        $('.row--description1').slideToggle();
        $('.row--button1 i').toggleClass('fa-angle-down fa-angle-up');
      } else if ($(this).hasClass('row--button2')) {
        $('.row--description2').slideToggle();
        $('.row--button2 i').toggleClass('fa-angle-down fa-angle-up');
      } else if ($(this).hasClass('row--button3')) {
        $('.row--description3').slideToggle();
        $('.row--button3 i').toggleClass('fa-angle-down fa-angle-up');
      } else if ($(this).hasClass('row--button4')) {
        $('.row--description4').slideToggle();
        $('.row--button4 i').toggleClass('fa-angle-down fa-angle-up');
      } else if ($(this).hasClass('row--button5')) {
        $('.row--description5').slideToggle();
        $('.row--button5 i').toggleClass('fa-angle-down fa-angle-up');
      }
    });

});
