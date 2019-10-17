const _ = require("lodash");
const sortBy = require("sort-array");

let filterBy = (filter, data) => {
  let result = [];
  if (filter === "women" || filter === "female") {
    for (let i in data) {
      data[i].gender === "F" ? result.push(data[i]) : "";
    }
    return orderByRank(result);
  }
  if (filter === "men" || filter === "male") {
    for (let i in data) {
      data[i].gender === "M" ? result.push(data[i]) : "";
    }
    return orderByRank(result);
  }

  if (filter === "youngest") {
    return evalAndSortAge(data);
  }
  if (filter === "oldest") {
    return evalAndSortAge(data).reverse();
  }
  if (filter === "real-time") {
    return realTimeRank(data);
  }

  return result;
};

let filterByState = (state, data) => {
  let result = [];
  for (let i in data) {
    data[i].state === state ? result.push(data[i]) : "";
  }
  return orderByRank(result);
};

let filterByIndustry = (industry, data) => {
  industry = industry.replace(/ /g, "");
  let result = [];
  for (let i in data) {
    if (data[i].industries) {
      const industries = data[i].industries.map(ctx =>
        ctx
          .toLowerCase()
          .replace(/ /g, "")
          .replace("&", "and")
      );
      industries.forEach(ctx => {
        if (
          ctx === industry ||
          ctx.includes(industry) ||
          industry.includes(ctx)
        ) {
          result.push(data[i]);
        }
      });
    }
  }
  return orderByRank(result);
};

let orderByRank = data => {
  let newData = [];
  for (let i in data) {
    data[i].rank ? newData.push(data[i]) : "";
  }
  return sortBy(newData, "rank");
};

let evalAndSortAge = data => {
  data = sortBy(data, "birthDate");
  result = [];
  for (let i in data) {
    data[i].birthDate ? result.push(data[i]) : "";
  }
  return result.reverse();
};

let realTimeRank = data => {
  let result = [];
  for (let i in data) {
    data[i].rank ? result.push(data[i]) : "";
  }
  return sortBy(result, "rank");
};

let getAllHeadquaters = data => data.filter(d => !_.isEmpty(d.headquarters));

module.exports = {
  filterBy: filterBy,
  filterByState: filterByState,
  orderByRank: orderByRank,
  filterByIndustry: filterByIndustry,
  getAllHeadquaters: getAllHeadquaters
};
