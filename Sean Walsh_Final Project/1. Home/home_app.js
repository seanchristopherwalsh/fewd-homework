$(document).ready(function() {

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


    $('.readmore1').click(function() {
    $('#show-this-on-click1').slideDown();
    $('.readmore1').hide();
    $('.readless1').show();
    event.preventDefault();

    });

    $('.readless1').click(function() {
      $('#show-this-on-click1').slideUp();
      $('.readmore1').show();
      $('.readless1s').hide();
      event.preventDefault();

    });

});
