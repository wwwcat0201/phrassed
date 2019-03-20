const knex = require('../connection');

const langPhraseMapper = {
  german: 'de',
  dutch: 'nl',
  english: 'en'
}

function searchInPhrases ({ query, lang }) {
  const column = langPhraseMapper[lang]
  return knex('phrases')
    .select('*')
    .whereRaw(
      `to_tsvector('${lang}', ${column}) @@ to_tsquery('${lang}', '${query}')`
    )
}

module.exports = {
  searchInPhrases
}
