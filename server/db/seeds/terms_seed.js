exports.seed = knex => {
  return knex("terms")
    .del()
    .then(() => {
      return knex("terms").insert({
        source: "iate",
        sourceId: "1104363",
        de: "Anlage",
        nl: "belegging",
        en: "investment",
        domain: "banking"
      })
    })
    .then(() => {
      return knex("terms").insert({
        source: "iate",
        sourceId: "2243625",
        de: "Anlage",
        nl: "installatie",
        en: "installation",
        domain: "nuclear energy"
      })
    })
}
