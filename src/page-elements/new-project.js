import {
    clickProject, projectIntoArray, defaultProjectClick, deleteProject, renderProject,
} from '../functions/project-factory';

import {
    createButton, createForm, createFullInput, createDiv,
} from './dom-elements';

import { getProjectStatus } from '../functions/sort-tasks';

let idCounter = 0;

function newProjectId() {
    idCounter += 1;
}

function deleteForm() {
    const form = document.getElementById('new-project-form');
    form.remove();
}

function createDeleteBtn(id) {
    const deleteBtn = createButton('x', 'delete-project');
    deleteBtn.id = id;
    deleteBtn.onclick = deleteProject;
    return deleteBtn;
}

function createDefaultProject() {
    const mainProjectContainer = document.getElementById('project-container');
    const newProjectContainer = createDiv('project', 'project0-id');
    const project = createButton('Default project', 'project-main-btn');

    project.id = 'default-project';
    project.onclick = defaultProjectClick;

    mainProjectContainer.appendChild(newProjectContainer);
    newProjectContainer.appendChild(project);
    newProjectContainer.appendChild(createDeleteBtn('delete-default-project'));
}

export function createProjectDom(project) {
    const mainProjectContainer = document.getElementById('project-container');
    const newProjectContainer = createDiv('project', `project${idCounter}-id`);

    const projectBtn = createButton(`${project}`, 'project-main-btn');

    projectBtn.id = `project${idCounter}`;
    projectBtn.onclick = clickProject;

    mainProjectContainer.appendChild(newProjectContainer);
    newProjectContainer.appendChild(projectBtn);
    newProjectContainer.appendChild(createDeleteBtn(`delete-project${idCounter}`));
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
        projectIntoArray();
        createProjectDom(inputValue.value);
        getProjectStatus(projectName.innerHTML);
        deleteForm();
        renderProject(input.value);
    });
}

export default function newProject() {
    const newProjectBtn = document.getElementById('new-project-btn');
    const newTaskBtn = document.getElementById('new-task-btn');

    createDefaultProject();
    newProjectBtn.addEventListener('click', () => {
        crateProjectInterface();
        newProjectId();
        newTaskBtn.disabled = false;
    });
}
