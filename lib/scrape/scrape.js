const sortBy = require('sort-array');
const request = require('request');
const {forbes400} = require('./config');

let filterBy = (filter) => {
  let data = forbes400[0];
  let result = [];
  if (filter === 'women' || filter === 'female') {
    for (let i in data) {
      (data[i].gender === 'F')
        ? result.push(data[i])
        : '';
    }
    return orderByRank(result);
  }
  if (filter === 'men' || filter === 'male') {
    for (let i in data) {
      (data[i].gender === 'M')
        ? result.push(data[i])
        : '';
    }
    return orderByRank(result);
  }

  if (filter === 'youngest') {
    return evalAndSortAge();
  }
  if (filter === 'oldest') {
    return evalAndSortAge().reverse();
  }
  if (filter === 'real-time') {
    return realTimeRank();
  }

  return result;
};

let filterByState = (state) => {
  let data = forbes400[0];
  let result = [];
  for (let i in data) {
    (data[i].state === state)
      ? result.push(data[i])
      : '';
  }
  return orderByRank(result);
}

let filterByIndustry = (industry) => {
  industry = industry.replace(/ /g, '');
  let result = [];
  let data = forbes400[0];
  for (let i in data) {
    let formattedIndustry = data[i].industry.toLowerCase().replace(/ /g, '');
    let alternativeInput = formattedIndustry.replace('&', 'and');
    let alternativeCheck = (alternativeInput === industry);
    let containsIndustry = formattedIndustry.includes(industry);
    (formattedIndustry === industry || alternativeCheck || containsIndustry)
      ? result.push(data[i])
      : '';
  }
  return orderByRank(result);
}

let orderByRank = (data) => {
  let newData = [];
  for (let i in data) {
    (data[i].rank)
      ? newData.push(data[i])
      : '';
  }
  return sortBy(newData, 'rank');
}

let evalAndSortAge = () => {
  const data = sortBy(forbes400[0], 'age');
  result = [];
  for (let i in data) {
    (data[i].age)
      ? result.push(data[i])
      : '';
  }
  return result;
}

let realTimeRank = () => {
  let data = forbes400[0];
  let result = [];

  for (let i in data) {
    (data[i].realTimeRank)
      ? result.push(data[i])
      : '';
  }
  return sortBy(result, 'realTimeRank');
}

let getAllHeadquaters = () => {
  result = []
  let data = orderByRank(forbes400[0]);
  for (let i in data) {
    result.push(data[i].headquarters);
  }
  return result;
}

module.exports = {
  filterBy: filterBy,
  filterByState: filterByState,
  orderByRank: orderByRank,
  filterByIndustry: filterByIndustry,
  getAllHeadquaters: getAllHeadquaters,
}
