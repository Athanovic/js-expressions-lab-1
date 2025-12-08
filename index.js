// Step 1: Temperature Data
const tempsF = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];
const tempsC = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29];

// Step 2: Convert Temperatures
const tempsFtoC = tempsF.map(f => (f - 32) * 5 / 9);
const tempsCtoF = tempsC.map(c => (c * 9 / 5) + 32);

// Step 3: Combine for totals
const allTempsF = [...tempsF, ...tempsCtoF];
const allTempsC = [...tempsFtoC, ...tempsC];

// Totals
const tot_temperature_in_fahrenheit = allTempsF.reduce((a, b) => a + b, 0);
const tot_temperature_in_celsius = allTempsC.reduce((a, b) => a + b, 0);

// Averages
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

// Step 4: Print Results
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);

// Export for testing
module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};
