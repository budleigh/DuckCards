var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var url = process.env.MONGODB_URI || 'mongodb://localhost/appdb';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var taskSchema = new Schema({
  id: ObjectId, // WTH is this
  title: String,
  status: String,
  dueDate: String,
  category: String,
  points: Number,
  notes: String,
  owner: String,
  creator: String,
  comments: [{
      user: String,
      comment: String
    }],
  projects: Number
});


var projectSchema = new Schema({
  id: Number,
  name: String
});


var Task = mongoose.model('Task', taskSchema);
var Project = mongoose.model('Project', projectSchema);

mongoose.connect(url);

var db = mongoose.connection;

module.exports = db;