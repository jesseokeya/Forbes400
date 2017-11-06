const request = require('request');
const link = 'https://www.forbes.com/ajax/list/data?year='
const path = `${new Date().getFullYear()}&uri=forbes-400&type=person`
const apiKey = 'AIzaSyCY1XrvoQWgMXP0ZBuYYARXeRNkSfUNMHQ';
const url = link + path;
let _data = [];

request(url, function(error, response, body) {
  if (error) {
    throw error;
  }
  _data.push(JSON.parse(body));
});

module.exports = {
  forbes400: _data,
  url: url,
  apiKey: apiKey
}
