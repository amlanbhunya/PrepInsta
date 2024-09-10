document.getElementById('taskForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const courseId = document.getElementById('courseId').value;
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const details = document.getElementById('details').value;
  
    const response = await fetch('http://localhost:5000/courses/' + courseId + '/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskName,
        dueDate,
        details,
      }),
    });
  
    const tasks = await response.json();
    console.log(tasks);
  });
  