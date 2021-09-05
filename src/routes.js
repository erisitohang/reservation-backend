const express = require('express')
const router = express.Router()

const slots = require('./modules/slots/controller');

module.exports = (app) => {
  app.use('/api', router);
  router.get('/ping', function (req, res) {
    res.send('pong')
  })
  router.get('/slots', slots.list)
  router.post('/slots', slots.book)
  router.get('/slots/:centreId', slots.detail);
};
