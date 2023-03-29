import { createTaskDom } from '../page-elements/new-task';

import { removeElementsByClass } from './project-factory';

const taskFactory = (projectName, name, description, date, status) => ({
    projectName, name, description, date, status,
});

export const taskArray = [];

function taskIntoArray(task) {
    if (task.projectName === 'Default project') {
        task.projectName = 'defaultProject';
        taskArray.push(task);
    } else taskArray.push(task);
}

export function removeTask() {
    const taskName = this.previousElementSibling
        .previousElementSibling
        .previousElementSibling.innerHTML;
    const taskDescription = this.previousElementSibling
        .previousElementSibling.innerHTML;
    const taskDate = this.previousElementSibling.innerHTML;

    taskArray.forEach((task) => {
        if (task.name === taskName
            && task.description === taskDescription
            && task.date === taskDate) {
            const indexOfTask = taskArray.indexOf(task);
            taskArray.splice(indexOfTask, 1);
            this.parentNode.remove();
        }
    });
    return taskArray;
}

export function removeTasks(project) {
    let taskTracker = 0;

    taskArray.forEach((task) => {
        if (task.projectName === project) {
            taskTracker += 1;
        } return taskTracker;
    });

    removeElementsByClass(project.replace(/\s/g, ''));
    const indexOfTasks = taskArray.map((element) => element.projectName).indexOf(project);
    taskArray.splice(indexOfTasks, taskTracker);
    taskTracker = 0;
    return taskArray;
}

export function newTask() {
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
    createTaskDom(
        nameInput.value,
        descriptionInput.value,
        dateInput.value,
        statusInput.checked,
        projectName.innerHTML.replace(/\s/g, ''),
    );
}
