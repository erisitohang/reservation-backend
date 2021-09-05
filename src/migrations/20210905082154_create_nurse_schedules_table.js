
exports.up = function(knex) {
    return knex.schema.createTable('nurse_schedules', function (table) {
        table.bigIncrements('id').primary();
        table.bigInteger('nurse_id').unsigned().notNullable();
        table.string('date', 10).notNullable();
        table.integer('hour').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.index(['date', 'hour']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('nurse_schedules');
};
