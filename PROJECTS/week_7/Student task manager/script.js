function addTask() {
    // Get form values
    const courseId = document.getElementById('course-id').value;
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const taskDetails = document.getElementById('task-details').value;

    // Validate form values (basic validation here)
    if (!courseId || !taskName || !dueDate || !taskDetails) {
        alert('Please fill in all fields.');
        return;
    }

    // Here you would usually send the data to a server
    // For demonstration, we will just show a confirmation message

    alert('Task added successfully');

    // Clear the form
    document.getElementById('task-form').reset();
}
