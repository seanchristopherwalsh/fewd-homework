$(document).ready(function(){

  $('.readmore').click(function() {
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
    event.preventDefault();
  });

  $('.readless').click(function() {
   $('#show-this-on-click').slideUp();
   $('.readmore').show();
   $('.readless').hide();
   event.preventDefault();
   });


  $('.learnmore').click(function() {
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
    event.preventDefault();

   });

});
