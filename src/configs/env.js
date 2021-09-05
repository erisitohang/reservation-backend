const path = require('path');
const fs = require('fs');
const envFile = path.join(__dirname, '..', '..', '/.env');
if (fs.existsSync(envFile)) {
  require('dotenv').config({ path: envFile });
} else {
  require('dotenv').config();
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USERNAME: process.env.DB_USERNAME || 'homage',
  DB_PASSWORD: process.env.DB_PASSWORD || 'secret',
  DB_NAME: process.env.DB_NAME || 'homage',
};
