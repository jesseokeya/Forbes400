const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const { router } = require('./lib/index.js');
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(logger('dev'));
app.use(express.static(__dirname + "/app/build/"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/build/index.html');
});

app.use('/api/', router);

app.listen(PORT, () => console.log(`App Running On PORT *${PORT}`));
