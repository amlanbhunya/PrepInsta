document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const clearCompletedButton = document.getElementById('clear-completed');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    clearCompletedButton.addEventListener('click', clearCompletedTasks);
    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        taskList.appendChild(li);

        newTaskInput.value = '';
    }

    function toggleTaskCompletion(event) {
        const checkbox = event.target;
        const li = checkbox.parentElement;
        li.classList.toggle('completed', checkbox.checked);
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('#task-list li.completed');
        completedTasks.forEach(task => task.remove());
    }
});
