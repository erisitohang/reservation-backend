
exports.up = function(knex) {
    return knex.schema.createTable('nurses', function (table) {
        table.bigIncrements('id').primary();
        table.bigInteger('centre_id').unsigned().notNullable();
        table.string('name', 50).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('nurses');
};
