const data = [
  {
    path: '/api/forbes400/',
    url: "https://forbes400.herokuapp.com/api/forbes400/",
    description: "Returns a Json Object Of the richest people in the forbes 400 in descending order of rank",
    params: "null",
    resource: "https://www.forbes.com/api/forbes-400/list/"
  },
  {
    path: '/api/forbes400/:filterBy',
    url: "https://forbes400.herokuapp.com/api/forbes400/youngest",
    description: "Returns a Json Object Of the richest people in the forbes 400 in descending order of rank which could be further filterBy any of the params below",
    params: "[ 'youngest', 'oldest', 'women or female', 'men or male', 'real-time' ]",
    resource: "https://www.forbes.com/api/forbes-400/list/"
  },
  {
    path: '/forbes400/states/:state',
    url: "https://forbes400.herokuapp.com/api/forbes400/states/Texas",
    description: "Returns a Json Object Of the richest people in the forbes 400 in descending order of rank which is further filtered by the state of the individuals",
    params: "Any valid state in the Usa",
    resource: "https://www.forbes.com/forbes-400/list/"
  },
  {
    path: '/forbes400/industries/:industry',
    url: "https://forbes400.herokuapp.com/api/forbes400/industries/technology",
    description: "Returns a Json Object Of the richest people in the forbes 400 in descending order of rank which can be further filterd by a specific industry your looking for",
    params: "Any valid industry i.e technology, fashion, finance, investments etc..",
    resource: "https://www.forbes.com/forbes-400/list/"
  },
  {
    path: '/forbes400/geolocation/data',
    url: "https://forbes400.herokuapp.com/api/forbes400/geolocation/data",
    description: "Returns a Json Object geolocation of the richest people in the forbes 400 in descending order of rank and a valid google geolocation link with api baked in",
    params: "null",
    resource: "https://www.forbes.com/forbes-400/list/"
  },
  {
    path: '/forbes400/getAllBillionaires',
    url: "https://forbes400.herokuapp.com/api/forbes400/getAllBillionaires",
    description: "Returns a Json Object of all the billionaires / richest people in the world",
    params: "null",
    resource: "https://www.forbes.com/forbes-400/list/"
  }
]

export {
  data
};
