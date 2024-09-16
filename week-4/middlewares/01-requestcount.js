// You have to create a middleware for logging the number of requests on a server

const express = require('express');

const app = express();
let requestCount = 0;
function logger(req , res ,next) {
  requestCount++;
  console.log(`number of requests till now is ${requestCount}`);
  next();
}

app.use(logger())
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;