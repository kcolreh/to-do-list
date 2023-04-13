export function validateProjectForm() {
    const projectName = document.getElementById('projectName').value;
    if (projectName === '') {
        alert('Please fill in the form');
        return false;
    } return true;
}

export function validateTaskForm() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDate = document.getElementById('taskDate').value;

    if (taskName === '') {
        alert('Please enter the task name!');
        return false;
    } if (taskDescription === '') {
        alert('Please enter the task description!');
        return false;
    } if (taskDate === '') {
        alert('Please enter the tasky');
        return false;
    } return true;
}
