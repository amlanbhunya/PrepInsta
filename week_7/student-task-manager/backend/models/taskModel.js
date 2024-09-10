const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  taskName: { type: String, required: true },
  dueDate: { type: Date },
  details: { type: String },
});

module.exports = mongoose.model('Task', taskSchema);
