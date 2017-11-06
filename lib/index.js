const express = require('express');
const router = express.Router();
const {
  filterBy,
  filterByState,
  orderByRank,
  filterByIndustry,
  getAllHeadquaters,
  getGeoData
} = require('./scrape/scrape');
const { forbes400 } = require('./scrape/config');


router.get('/forbes400', (req, res) => {
  res.json(orderByRank(forbes400[0]));
})


router.get('/forbes400/:filterBy', (req, res) => {
  isValid = false;
  const validParams = [
    'youngest',
    'oldest',
    'women',
    'female',
    'men',
    'male',
    'real-time'
  ];
  const param = req.params.filterBy.toLowerCase();
  for (let i in validParams) {
    if (validParams[i] === param) {
      isValid = true;
    }
  }
  (isValid) ?
  res.json(filterBy(param)): res.json({
    error: 'Invalid Search Field'
  });

})

router.get('/forbes400/states/:state', (req, res) => {
  let param = req.params.state.toLowerCase();
  param = param[0].toUpperCase() + param.slice(1);
  res.json(filterByState(param));
})

router.get('/forbes400/industries/:industry', (req, res) => {
  const params = req.params.industry.toLowerCase();
  res.json(filterByIndustry(params));
})

router.get('/forbes400/geolocation/data', (req, res) => {
  const result = {
    getAllHeadquaters: getAllHeadquaters(),
    orderedByRank: orderByRank(forbes400[0]),
    url: getGeoData()
  }
  res.json(result);
});

module.exports = { router };
