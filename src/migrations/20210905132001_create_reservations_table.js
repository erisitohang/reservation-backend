
exports.up = function(knex) {
    return knex.schema.createTable('reservations', function (table) {
        table.bigIncrements('id').primary();
        table.bigInteger('centre_id').unsigned().notNullable();
        table.string('nric').notNullable();
        table.string('phone', 10).notNullable();
        table.string('date').notNullable();
        table.integer('hour').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.unique('nric')
        table.index(['date', 'hour']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reservations');
};
