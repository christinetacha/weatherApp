function Temperature() {
}

Temperature.prototype.toFahrenheit = function(degrees) {
  return (degrees * (9/5) - 459.67).toFixed(2);
};

exports.temperatureModule = Temperature;
