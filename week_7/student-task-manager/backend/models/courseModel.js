// backend/models/courseModel.js
const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
