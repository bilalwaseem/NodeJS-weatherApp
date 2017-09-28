const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/53edf63f1e1165096e353f69d8deb5b5/${lat},${long}?units=si`,
    json: true
  }, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
      } else {
        callback('Unable to fetch weather.');
      }

  });
}



module.exports = {
  getWeather
};
