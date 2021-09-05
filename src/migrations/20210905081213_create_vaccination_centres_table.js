
exports.up = function(knex) {
    return knex.schema.createTable('vaccination_centres', function (table) {
        table.bigIncrements('id').primary();
        table.string('name', 50).notNullable();
        table.string('address', 255).notNullable();
        table.string('vaccine_type', 60).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vaccination_centres');
};
