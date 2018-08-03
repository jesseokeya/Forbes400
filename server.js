const express = require('express');
const log = require('custom-logger')
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const { router } = require('./lib/index.js');
const PORT = process.env.PORT || 8000;


// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use((req, res, next) => {
  log.info(`date -> ${new Date().toLocaleString()}`)
  log.info(`user-agent -> ${req.headers['user-agent']}`)
  next()
})

app.use(cors());
app.use(urlencodedParser);
app.use(jsonParser);
app.use(logger('dev'));
app.use(express.static(__dirname + "/app/build/"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/build/index.html');
});

app.use('/api/', router);

const server = app.listen(PORT, () => console.log(`App Running On PORT *${PORT}`));

module.exports = { app, server }
