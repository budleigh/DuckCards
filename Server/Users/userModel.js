var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.comparePasswords = function (candidatePassword, cb) {
  var savedPassword = this.password;

  bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
    if (err) {
      cb(err)
    } else {
      cb(isMatch);
    }
  });
};

userSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
})


module.exports = mongoose.model('User', userSchema);