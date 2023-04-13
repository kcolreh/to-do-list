import {
    createButton, createForm, createFullInput, createParagraph, createTitle, createDiv,
} from './dom-elements';

import { sortStatus, removeTask, clickTask } from '../functions/task-factory';
import { validateTaskForm } from '../functions/validation';

function deleteForm() {
    const form = document.getElementById('new-task-form');
    form.remove();
}

function createTaskInterface() {
    const content = document.getElementById('content');
    const form = createForm('New-Task', '', 'GET', 'new-task-interface');
    const inputTitle = createFullInput('taskName', 'new-task-name-label', 'text', 'taskName', 'new-task-name-input', 'taskName', 'Task Name');
    const inputDescription = createFullInput('taskDescription', 'new-task-description-label', 'text-area', 'taskDescription', 'new-task-name-input', 'taskDescription', 'Task Description');
    const inputDate = createFullInput('taskDate', 'new-task-date-label', 'date', 'taskDate', 'new-task-name-input', 'taskDate', '1994-10-03');
    const inputStatus = createFullInput('taskStatus', 'new-task-checkbox-label', 'checkbox', 'taskStatus', 'new-task-name-status', 'taskStatus', 'Importance', 'Important');
    const submitButton = createButton('Submit', 'submit-btn');

    form.id = 'new-task-form';

    content.appendChild(form);
    form.appendChild(inputTitle);
    form.appendChild(inputDescription);
    form.appendChild(inputDate);
    form.appendChild(inputStatus);
    form.appendChild(submitButton);

    submitButton.type = 'button';

    submitButton.addEventListener('click', () => {
        if (validateTaskForm() === true) {
            sortStatus();
            deleteForm();
        }
    });
}

export function newTaskCall() {
    const newTaskBtn = document.getElementById('new-task-btn');

    newTaskBtn.addEventListener('click', () => {
        createTaskInterface();
    });
}

function createDeleteBtn(id) {
    const deleteBtn = createButton('x', 'delete-task');
    deleteBtn.id = id;
    deleteBtn.onclick = removeTask;
    return deleteBtn;
}

export function createTaskDom(name, description, date, status, projectClass) {
    const projectContainer = document.getElementById('task-container');

    const taskContainer = createDiv('task', 'task');
    const domName = createTitle(3, name, 'task-title');
    const domDescription = createParagraph(description, 'task-description', 'task-description');
    const domDate = createParagraph(date, 'task-date', 'task-date');
    const removeButton = createDeleteBtn(null);

    taskContainer.classList.add(projectClass);
    taskContainer.onclick = clickTask;

    projectContainer.appendChild(taskContainer);
    taskContainer.appendChild(domName);
    taskContainer.appendChild(domDescription);
    taskContainer.appendChild(domDate);
    if (status === true || status === 'true') {
        taskContainer.classList.add('important');
    }
    taskContainer.appendChild(removeButton);
}
