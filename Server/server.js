var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var db = require('./db/db.js');
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname ,  '../build')));
app.use(bodyParser.json());

//RUN SERVER
var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('listening on port', port);
});

//SERVE UP STATIC INDEX.HTML
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

//ERROR HANDLING
function handleError(res, error, message, code) {
  console.log("ERROR: " + error);
  res.status(code || 500).json({"error": message});
};

//GETS TASKS
app.get('/tasks', function(req, res) {
  db.collection('tasks').find({}).toArray(function(err, data) {
    err ? handleError(res, err.message, 'Failed to get tasks') : res.status(200).json(data);
  })
});

//POSTS TASKS
app.post('/tasks', function(req, res) {
  var newTask = req.body;
  db.collection('tasks').insertOne(newTask, function(err, data) {
    err ? handleError(res, err.message, 'Failed to create task') : res.status(201).json(data);
  });
});

//UPDATE TASKS
app.post('/update', function(req, res) {
  var updates = req.body.updates;
  var title = req.body.title;
  db.collection('tasks').update({ "title": title }, { $set:  updates }, function(err, data) {
    err ? handleError(res, err.message, 'Failed to create task') : res.status(201).json(data);
  });
});
