const express = require('express');
const router = express.Router();
const {filterBy, filterByState, orderByRank, filterByIndustry, getAllHeadquaters} = require('./scrape/scrape');
const {forbes400, allBillionaires} = require('./scrape/config');

router.get('/forbes400', (req, res) => {
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = orderByRank(forbes400[0]);
    const filteredResult = [];
    for (let i = 0; i < parseInt(filteredForbes400.length); i++) {
      if (i < parseInt(req.query.limit)) {
        filteredResult.push(filteredForbes400[i]);
      }
    }
    res.json(filteredResult);
  } else {
    res.json(orderByRank(forbes400[0]));
  }
})

router.get('/forbes400/getAllBillionaires', (req, res) => {
  const limit = req.query.limit;
  if(limit){
    let result = [];
    for(let i = 0; i < limit; i++){
      result.push(allBillionaires[0][i])
    }
    res.send(result)
  } else {
    res.send(orderByRank(allBillionaires[0]));
  }
});

router.get('/forbes400/:filterBy', (req, res) => {
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
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

  if (req.query.limit && isValid) {
    const filteredForbes400 = filterBy(param);
    const filteredResult = [];
    for (let i = 0; i < parseInt(filteredForbes400.length); i++) {
      if (i < parseInt(req.query.limit)) {
        filteredResult.push(filteredForbes400[i]);
      }
    }

    res.json(filteredResult);
  } else {
    (isValid)
      ? res.json(filterBy(param))
      : res.json({error: 'Invalid Search Field'});
  }

})

router.get('/forbes400/states/:state', (req, res) => {
  let param = req.params.state.toLowerCase();
  param = param[0].toUpperCase() + param.slice(1);
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = filterByState(param);
    const filteredResult = [];
    for (let i = 0; i < parseInt(filteredForbes400.length); i++) {
      if (i < parseInt(req.query.limit)) {
        filteredResult.push(filteredForbes400[i]);
      }
    }
    res.json(filteredResult);
  } else {
    res.json(filterByState(param));
  }
})

router.get('/forbes400/industries/:industry', (req, res) => {
  console.log(req.params.industry);
  const params = req.params.industry.toLowerCase();
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = filterByIndustry(params);
    const filteredResult = [];
    for (let i = 0; i < parseInt(filteredForbes400.length); i++) {
      if (i < parseInt(req.query.limit)) {
        filteredResult.push(filteredForbes400[i]);
      }
    }
    res.json(filteredResult);
  } else {
    res.json(filterByIndustry(params));
  }
})

router.get('/forbes400/geolocation/data', (req, res) => {
  let _filteredResult = null;
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = orderByRank(forbes400[0]);
    const filteredResult = [];
    for (let i = 0; i < parseInt(filteredForbes400.length); i++) {
      if (i < parseInt(req.query.limit)) {
        filteredResult.push(filteredForbes400[i]);
      }
    }
    _filteredResult = filteredResult;
  } else {
    _filteredResult = orderByRank(forbes400[0]);
  }
  const result = {
    getAllHeadquaters: getAllHeadquaters(),
    orderedByRank: _filteredResult
  }
  res.json(result);
});

module.exports = {
  router
};
