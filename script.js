const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function () {
    addTask();
});

taskInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) { // 13 is the Enter key code
        event.preventDefault();
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}