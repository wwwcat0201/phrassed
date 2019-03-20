exports.seed = knex => {
  return knex("phrases")
    .del()
    .then(() => {
      return knex("phrases").insert({
        source: "me",
        sourceId: "1",
        en: "I can't tell you if that's a good investment.",
        de: "Ich kann dir nicht sagen ob das eine gute Anlage ist.",
        nl: "Ik kan je niet zeggen of dat een goede investering is."
      })
    })
    .then(() => {
      return knex("phrases").insert({
        source: "me",
        sourceId: "2",
        en: "The installation has to be transported.",
        de: "Die Anlage muss transportiert werden.",
        nl: "De installatie moet worden getransporteerd."
      })
    })
}
