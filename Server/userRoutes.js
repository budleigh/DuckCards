var User = require('./db/userModel.js');
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
    })
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
  }
}