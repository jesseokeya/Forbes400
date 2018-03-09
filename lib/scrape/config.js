const request = require('request');
const link = 'https://www.forbes.com/ajax/list/data?year='
const path = `${new Date().getFullYear() - 1}&uri=forbes-400&type=person`
const urlAllBillionaires = `${link}2018&uri=billionaires&type=person`;
const urlForbes400 = link + path;
let forbes400 = [];
let allBillionaires = [];

request(urlForbes400, function(error, response, body) {
  if (error) {
    throw error;
  }
  forbes400.push(JSON.parse(body));
});

request(urlAllBillionaires, (error, response, body) => {
  if (error) {
    throw error;
  }
  allBillionaires.push(JSON.parse(body));
});

module.exports = {
  forbes400: forbes400,
  allBillionaires: allBillionaires
}
