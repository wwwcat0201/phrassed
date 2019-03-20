exports.up = function(knex) {
  return knex.schema.createTable("terms", table => {
    table.increments()
    table.string("source").notNullable()
    table
      .string("sourceId")
      .notNullable()
      .unique()
    table.string("de")
    table.string("nl")
    table.string("en")
    table.string("domain")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("terms")
}
