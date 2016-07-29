var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var db = require('./db/db.js');
var jwt = require('jwt-simple');
var http = require('http');
var User = require('./db/userModel.js');
var Project = require('./db/projectModel.js');

var secret = process.env.SECRET || 'whatyoudontlikefalafel';

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
app.get('/projects/:id/tasks', function(req, res) {
  var id = req.params.id;
  Project.findById(id, function(err, data) {
    err ? handleError(res, err.message, 'Failed to get tasks') : res.status(200).json(data.tasks);
  });
});

//POSTS TASKS
app.post('/projects/:id/tasks', function(req, res) {
  var id = req.params.id;
  var newTask = req.body;

  Project.findById(id, function (err, project) {
    if (err) {
      res.send(404);
    } else {
      project.tasks.push(newTask);
      project.save();
      res.json(newTask);
    }
  });
});

//UPDATE TASKS
app.post('/projects/:projectId/tasks/:taskId/update', function(req, res) {
  var updates = req.body;
  var projectId = req.params.projectId;
  var taskId = req.params.taskId;

  Project.findById(projectId, function(err, project) {
    project.tasks.forEach(function (task, i) {
      var id = task._id.toString();

      if (id === taskId) {
        project.tasks[i] = updates;
        project.save();
        res.json(updates);
      }
    });
  });
});

// SIGN UP USER
app.post('/users/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username}, function (err, user) {
    if (user) {
      res.send('User already exists');
    } else {
      return User.create({
        username: username,
        password: password
      }, function (err, user) {
        if (err) {
          res.send('failed to create user');
        } else {
          var token = jwt.encode(user, secret);
          res.json({token: token});
        }
      });
    }
  });
});

// SIGN IN USER
app.post('/users/signin', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username}, function (err, user) {
    if (!user) {
      res.send(404);
    } else {
      return user.comparePasswords(password, function (match) {
        if (match) {
          var token = jwt.encode(user, secret);
          res.json({token: token});
        } else {
          res.send(201);
        }
      });
    }
  });
});

// CREATE A PROJECT
app.post('/users/projects', function (req, res) {
  var projectName = req.body.projectName;
  var username = jwt.decode(req.headers['x-access-token'], secret).username;

  User.findOne({username: username}, function (err, user) {
    if (!user) {
      res.send(404);
    } else {
      db.collection('tasks').insertOne({name: projectName, tasks: [], users: [username]}, function(err, data) {
        err ? handleError(res, err.message, 'Failed to create task') : res.status(201).json(data);
      });
    }
  });
});

// GET PROJECTS FOR A USER
app.get('/users/projects', function (req, res) {
  var username = jwt.decode(req.headers['x-access-token'], secret).username;

  db.collection('tasks').find({ users: username }).toArray(function (err, projects) {
    if (err) {
      res.send(404);
    } else {
      res.json(projects);
    }
  });
});
