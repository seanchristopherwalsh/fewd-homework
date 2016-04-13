$(document).ready(function() {
  $('#submit-btn').click(function(){

  event.preventDefault();
  // The var city =, means that I'll only have to write 'city' from here on in.
  var city = $('#city-type').val();
  // All you need to trim
  var city = city.toLowerCase().trim();
  console.log(city)

  if (city == 'los angeles'||city == 'la'||city == 'l.a.'||city == 'sfo') {
    $('body').attr('class', 'la')
  }

   if (city == 'sydney'||city == 'oz'||city == 'syd') {
    $('body').attr('class','sydney')
  }

  else if (city == 'austin'||city == 'atx') {
    $('body').attr('class','austin')
  }

  else if (city == 'nyc'||city == 'n.y.') {
    $('body').attr('class','nyc')
  }

  else if (city == 'san francisco'||city == 'sf'|| city == 's.f.'||city == 'sfo') {
    $('body').attr('class','sf')

  }

  else if (city == 'dublin'||city == 'the mother land'||city == 'dub') {
    $('body').attr('class','dublin')
  }

// Lastly, it's saying if the wrong city is put in, console.log Wrong City
  else {
  console.log('Wrong City!')
  }
});





});
