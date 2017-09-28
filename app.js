const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather',
      string: true //tells yargs to parse the -a as a string always
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errMsg, results) => {
  if (errMsg) {
    console.log(errMsg);
  } else {
    console.log(`Location: ${results.address}`);
    weather.getWeather(results.latitude, results.longitude, (errMsg, weatherResults) => {
      if (errMsg) {
        console.log(errMsg);
      } else {
        console.log(`It's currently ${weatherResults.temperature}C, but feels like ${weatherResults.apparentTemperature}C`);
      }
    });
  }
});
