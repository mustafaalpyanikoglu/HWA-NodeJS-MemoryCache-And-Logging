const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');

const planetRoutes = require('./api/routes/planets');

const HOST_NAME = "127.0.0.1";
const PORT = 3000;

app.use(compression());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/planets', planetRoutes);


app.listen(PORT, HOST_NAME, () => {
  console.log(`Server is running at http://${HOST_NAME}:${PORT}`);
});

module.exports = app;