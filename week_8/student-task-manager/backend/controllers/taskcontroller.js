// backend/controllers/taskController.js
const Task = require('../models/taskModel');

// Get tasks for a specific course
const getTasksByCourseId = async (req, res) => {
  try {
    const tasks = await Task.find({ courseId: req.params.courseId });
    if (!tasks) {
      return res.status(404).json({ message: 'Tasks not found for this course' });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTasksByCourseId };
