import {
    createButton, createForm, createFullInput, createDiv,
} from './dom-elements';

import { addProjectToFactory } from '../functions/project-factory';

let idCounter = 0;

function newProjectId() {
    idCounter += 1;
}

function deleteForm() {
    const form = document.getElementById('new-project-form');
    form.remove();
}

function createProjectDom() {
    const mainProjectContainer = document.getElementById('project-container');
    const projectNameInput = document.getElementById('projectName');

    const newProjectContainer = createDiv('project', `project${idCounter}-id`);
    const project = createButton(`${projectNameInput.value}`, 'project-main-btn');

    project.id = `project${idCounter}`;
    project.onclick = addProjectToFactory;

    mainProjectContainer.appendChild(newProjectContainer);
    newProjectContainer.appendChild(project);

    deleteForm();
}

function crateProjectInterface() {
    const content = document.getElementById('content');
    const form = createForm('New-Project', '', 'GET', 'new-project-interface');
    const input = createFullInput('projectName', 'new-project-name-label', 'text', 'projectName', 'new-project-name-input', 'projectName');
    const submitButton = createButton('Submit', 'submit-btn');

    form.id = 'new-project-form';

    content.appendChild(form);
    form.appendChild(input);
    form.appendChild(submitButton);

    submitButton.type = 'button';
    submitButton.onclick = createProjectDom;
}

export default function newProject() {
    const newProjectBtn = document.getElementById('new-project-btn');

    newProjectBtn.addEventListener('click', () => {
        crateProjectInterface();
        newProjectId();
    });
}
