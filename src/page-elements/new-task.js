import {
    createButton, createForm, createFullInput,
} from './dom-elements';

import newTask from '../functions/task-factory';

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
    const inputStatus = createFullInput('taskStatus', 'new-task-checkbox-label', 'checkbox', 'taskStatus', 'new-task-name-input', 'taskStatus');
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
        newTask();
        deleteForm();
    });
}

export default function newTaskCall() {
    const newTaskBtn = document.getElementById('new-task-btn');

    newTaskBtn.addEventListener('click', () => {
        createTaskInterface();
    });
}
