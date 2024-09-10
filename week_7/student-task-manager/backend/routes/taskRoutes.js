const express = require('express');
const Task = require('../models/taskModel'); // Import the Task model
const router = express.Router();

// POST route to add a task for a specific course
router.post('/:courseId/tasks', async (req, res) => {
  const { courseId } = req.params;
  const { taskName, dueDate, details } = req.body;

  try {
    const task = new Task({
      courseId,
      taskName,
      dueDate,
      details,
    });

    await task.save();
    res.status(201).json({ message: 'Task added successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error adding task', error });
  }
});

module.exports = router;
