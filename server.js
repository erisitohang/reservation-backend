const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const routes = require('./src/routes');
app.use(cors());
app.use(bodyParser.json());
routes(app);

app.listen(port, function () {
  console.log(`Express app started on port :${port}`);
});
