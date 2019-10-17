module.exports = {
  allBillionaires: async _ => {
    try {
      return require("axios")
        .get(process.env.FORBES_URL)
        .then(res => res.data.personList.personsLists);
    } catch (err) {
      throw err
    }
  }
}
