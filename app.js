const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;