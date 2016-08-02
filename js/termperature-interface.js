// var apiKey = require('./../.env').apiKey;
// var Temperature = require('./../js/temperature.js').temperatureModule;
//
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
//       var newTemperature = new Temperature(response.main.temp);
//       $('.showTemp').append("<h3>The temperature in " + city + " is " + newTemperature.toFahrenheit() +"</h3>");
//     }).fail(function(error) {
//       $('.showTemp').text(error.responseJSON.message);
//     });
//   });
// });
