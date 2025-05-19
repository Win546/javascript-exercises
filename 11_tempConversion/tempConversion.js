const convertToCelsius = (temp) => {return parseFloat(((temp - 32) / 1.8).toFixed(1)) };

const convertToFahrenheit = (temp) => {return parseFloat(((temp * 1.8) + 32).toFixed(1)) };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
