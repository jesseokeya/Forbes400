const express = require('express');
const router = express.Router();
const { filterBy, filterByState, orderByRank, filterByIndustry, getAllHeadquaters } = require('./scrape/scrape');
const { allBillionaires } = require('./scrape');

router.get('/forbes400', async (req, res) => {
  const billionaires = await allBillionaires()
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = orderByRank(billionaires);
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

router.get('/forbes400/getAllBillionaires', async (req, res) => {
  const billionaires = await allBillionaires()
  const limit = req.query.limit;
  const orderedList = orderByRank(billionaires);
  if (limit) {
    let result = [];
    for (let i = 0; i < limit; i++) {
      result.push(orderedList[i])
    }
    res.send(result)
  } else {
    res.send(orderedList);
  }
});

router.get('/forbes400/:filterBy', async (req, res) => {
  const billionaires = await allBillionaires()
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
    const filteredForbes400 = filterBy(param, billionaires);
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
      : res.json({ error: 'Invalid Search Field' });
  }
})

router.get('/forbes400/states/:state', async (req, res) => {
  const billionaires = await allBillionaires()
  let param = req.params.state.toLowerCase();
  param = param[0].toUpperCase() + param.slice(1);
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = filterByState(param, billionaires);
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

router.get('/forbes400/industries/:industry', async (req, res) => {
  const billionaires = await allBillionaires()
  const params = req.params.industry.toLowerCase();
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = filterByIndustry(params, billionaires);
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

router.get('/forbes400/geolocation/data', async (req, res) => {
  const billionaires = await allBillionaires()
  let _filteredResult = null;
  req.query.limit = (req.query.limit)
    ? req.query.limit
    : 400;
  if (req.query.limit) {
    const filteredForbes400 = orderByRank(billionaires);
    const filteredResult = [];
    for (let i = 0; i < parseInt(filteredForbes400.length); i++) {
      if (i < parseInt(req.query.limit)) {
        filteredResult.push(filteredForbes400[i]);
      }
    }
    _filteredResult = filteredResult;
  } else {
    _filteredResult = orderByRank(billionaires);
  }
  const result = {
    getAllHeadquaters: getAllHeadquaters(_filteredResult),
    orderedByRank: _filteredResult
  }
  res.json(result);
});

module.exports = { router };
