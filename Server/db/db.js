var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var url = process.env.MONGODB_URI || 'mongodb://localhost/appdb';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var taskSchema = new Schema({
  id: ObjectId,
  name: String,
  tasks: [{
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
      }]
    }],
  users: [String]
});

var Task = mongoose.model('Task', taskSchema);

mongoose.connect(url);

var db = mongoose.connection;

module.exports = db;