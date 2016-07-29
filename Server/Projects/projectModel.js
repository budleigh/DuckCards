var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var projectSchema = new Schema({
  id: ObjectId,
  name: String,
  tasks: [{
    id: ObjectId,
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

module.exports = mongoose.model('Project', projectSchema);