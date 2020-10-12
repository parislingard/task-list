const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for task list
const TaskSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The task text field is required']
  }
})

// create model for task
const Task = mongoose.model('task', TaskSchema);

module.exports = Task;