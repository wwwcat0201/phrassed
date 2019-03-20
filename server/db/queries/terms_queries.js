const knex = require("../connection")

const langTermMapper = {
  german: "de",
  dutch: "nl",
  english: "en"
}

function getAllTerms() {
  return knex("terms").select("*")
}

function getTerm({ term, lang }) {
  return knex("terms")
    .select("*")
    .where(langTermMapper[lang], term)
}

function searchTerm({ term, lang }) {
  return knex("terms")
    .select("*")
    .where(langTermMapper[lang], "ilike", `%${term}%`)
}

module.exports = {
  getAllTerms,
  getTerm,
  searchTerm
}
