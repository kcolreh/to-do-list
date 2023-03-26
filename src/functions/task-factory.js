const taskFactory = (projectName, name, description, date, status) => ({
    projectName, name, description, date, status,
});

export const taskArray = [];

function taskIntoArray(task) {
    console.log(taskArray);
    if (task.projectName === 'Default project') {
        task.projectName = 'defaultProject';
        taskArray.push(task);
    } else taskArray.push(task);
}

export default function newTask() {
    const projectName = document.getElementById('project-title-h1');
    const nameInput = document.getElementById('taskName');
    const descriptionInput = document.getElementById('taskDescription');
    const dateInput = document.getElementById('taskDate');
    const statusInput = document.getElementById('taskStatus');

    const task = taskFactory(
        projectName.innerHTML,
        nameInput.value,
        descriptionInput.value,
        dateInput.value,
        statusInput.checked,
    );

    taskIntoArray(task);
}
