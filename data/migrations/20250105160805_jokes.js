exports.up = function (knex) {
  return knex.schema.createTable("jokes", (tbl) => {
    tbl.increments("joke_id");
    tbl.text("joke").notnullable();
    tbl.text("punchline").notnullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("jokes");
};
