var Weather = require('./../js/weather.js').weatherModule;
var Temperature = require('./../js/temperature.js').temperatureModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

var displayTemperature = function(city, temperatureData) {
  $('.showTemp').text("The temperature in " + city + " is " + temperatureData + "degrees");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity, displayTemperature);
  });
});


// var Weather = require('./../js/weather.js').weatherModule;
//
// $(document).ready(function() {
//   var currentWeatherObject = new Weather();
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     var humidity = currentWeatherObject.getWeather(city);
//     $('.showWeather').append("<h3>The humidity in " + city + " is " + humidity + "% </h3>");
//   });
// });
