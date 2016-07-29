var User = require('./userModel.js');
var db = require('../db/db');
var jwt = require('jwt-simple');
var secret = process.env.SECRET || 'whatyoudontlikefalafel';

module.exports = {
  //sign-up
  signUp: function(req, res) {
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
  },
  //sign-in
  signIn: function (req, res) {
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
  },

  projects: function (req, res) {
    var username = jwt.decode(req.headers['x-access-token'], secret).username;

    db.collection('projects').find({ users: username }).toArray(function (err, projects) {
      if (err) {
        res.send(404);
      } else {
        res.json(projects);
      }
    });
  }
};
