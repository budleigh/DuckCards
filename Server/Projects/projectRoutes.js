var Project = require('./projectModel');
var jwt = require('jwt-simple');
var secret = process.env.SECRET || 'whatyoudontlikefalafel';

module.exports = {
  //get tasks
  getTasks: function (req, res) {
    var id = req.params.id;
    Project.findById(id, function(err, project) {
      if (err) {
        res.send(500);
      } else {
        res.json(project.tasks);
      }
    });
  },

  addTask: function (req, res) {
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
  },
  // Id still needed but needs to be in the JSON
  updateTask: function (req, res) {
    var updates = req.body;
    var projectId = req.params.id;
    var taskId = updates._id;

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
  },

  createProject: function (req, res) {
    var projectName = req.body.projectName;
    var username = jwt.decode(req.headers['x-access-token'], secret).username;

    Project.create({ name: projectName, tasks: [], users: [username] }, function (err, project) {
      if (err) {
        res.send(201);
      } else {
        res.json(project);
      }
    });
  }
}