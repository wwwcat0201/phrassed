const { searchSuggestions } = require("../../db/queries/suggestionsQueries")

module.exports = async function getSuggestions(req, res) {
  const { source, q } = req.query

  const queryResult = await searchSuggestions({ source, q })

  const result = queryResult.map(t => t.term)
  res.status(200).send(result)
}
