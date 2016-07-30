var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var http = require('http');
var userRoutes = require('./Users/userRoutes');
var projectRoutes = require('./Projects/projectRoutes');

var app = express();
var server = http.createServer(app);

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

app.post('/projects', projectRoutes.createProject);
app.get('/projects/:id', projectRoutes.getProject);
app.get('/projects/:id/tasks', projectRoutes.getTasks);
app.post('/projects/:id/tasks', projectRoutes.addTask);
app.put('/projects/:id/tasks', projectRoutes.updateTask);
app.post('/users/signup', userRoutes.signUp);
app.post('/users/signin', userRoutes.signIn);
app.get('/users/projects', userRoutes.projects);
