import {
    clickProject, projectIntoArray, deleteProject, renderProject,
} from '../functions/project-factory';

import {
    createButton, createForm, createFullInput, createDiv,
} from './dom-elements';

import { getProjectStatus } from '../functions/sort-tasks';
import { validateProjectForm } from '../functions/validation';

let idCounter = 0;

function newProjectId() {
    idCounter += 1;
}

function deleteForm() {
    const form = document.getElementById('new-project-form');
    form.remove();
}

export function defaultProjectLoad() {
    const projectTitle = document.getElementById('project-title-h1');
    const newTaskBtn = document.getElementById('new-task-btn');
    if (projectTitle.innerHTML === 'Project Name') {
        projectTitle.innerHTML = 'Select a project';
        newTaskBtn.disabled = true;
    }
}

function createDeleteBtn() {
    const deleteBtn = createButton('x', 'delete-project');

    deleteBtn.onclick = deleteProject;
    return deleteBtn;
}

export function createProjectDom(project) {
    const mainProjectContainer = document.getElementById('project-container');
    const newProjectContainer = createDiv('project', `project${idCounter}-id`);

    const projectBtn = createButton(`${project}`, 'project-main-btn');

    projectBtn.id = `project${idCounter}`;
    projectBtn.onclick = clickProject;

    mainProjectContainer.appendChild(newProjectContainer);
    newProjectContainer.appendChild(projectBtn);
    newProjectContainer.appendChild(createDeleteBtn());
}

function crateProjectInterface() {
    const content = document.getElementById('content');
    const form = createForm('New-Project', '', 'GET', 'new-project-interface');
    const input = createFullInput('projectName', 'new-project-name-label', 'text', 'projectName', 'new-project-name-input', 'projectName', 'Project Title');
    const submitButton = createButton('Submit', 'submit-btn');
    const projectName = document.getElementById('project-title-h1');

    form.id = 'new-project-form';

    content.appendChild(form);
    form.appendChild(input);
    form.appendChild(submitButton);

    submitButton.type = 'button';
    submitButton.addEventListener('click', () => {
        const inputValue = document.getElementById('projectName');
        projectName.innerHTML = inputValue.value;
        if (validateProjectForm() === true) {
            projectIntoArray();
            createProjectDom(inputValue.value);
            getProjectStatus(projectName.innerHTML);
            deleteForm();
            renderProject(input.value);
        }
    });
}

export function newProject() {
    const newProjectBtn = document.getElementById('new-project-btn');
    const newTaskBtn = document.getElementById('new-task-btn');

    newProjectBtn.addEventListener('click', () => {
        crateProjectInterface();
        newProjectId();
        newTaskBtn.disabled = false;
    });
}
