const { join } = require('path');
const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  NODE_ENV
} = require('../configs/env');

const connection = {
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
};

const knex = {
  client: 'mysql',
  connection,
  migrations: {
    directory: join(__dirname, '../migrations'),
  },
  seeds: {
    directory: join(__dirname, '../seeds'),
  },
};

module.exports = knex;
