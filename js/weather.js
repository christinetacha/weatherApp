var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayHumidity, displayTemperature) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      displayHumidity(city, response.main.humidity);
      displayTemperature(city, response.main.temp);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;



// var apiKey = require('./../.env').apiKey;
//
// Weather = function(){
// }
//
// exports.Weather.prototype.getWeather = function(city) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
//     console.log(response.main.humidity)
//     return response.main.humidity;
//   }).fail(function(error) {
//     $('.showWeather').text(error.responseJSON.message);
//   });
// };
