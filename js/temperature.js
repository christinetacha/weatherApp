function Temperature(degrees) {
  this.degrees = parseInt(degrees);
}

Temperature.prototype.toFahrenheit = function() {
  return (this.degrees * (9/5) - 459.67).toFixed(2);
};

exports.temperatureModule = Temperature;
