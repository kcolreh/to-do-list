import { clickProject, projectIntoArray, defaultProjectClick } from '../functions/project-factory';
import {
    createButton, createForm, createFullInput, createDiv,
} from './dom-elements';

let idCounter = 0;

function newProjectId() {
    idCounter += 1;
}

function deleteForm() {
    const form = document.getElementById('new-project-form');
    form.remove();
}

function createDefaultProject() {
    const mainProjectContainer = document.getElementById('project-container');
    const newProjectContainer = createDiv('project', 'project0-id');
    const project = createButton('Default project', 'project-main-btn');

    project.id = 'default-project';
    project.onclick = defaultProjectClick;

    mainProjectContainer.appendChild(newProjectContainer);
    newProjectContainer.appendChild(project);
}

export function createProjectDom(project) {
    const mainProjectContainer = document.getElementById('project-container');
    const newProjectContainer = createDiv('project', `project${idCounter}-id`);

    const projectBtn = createButton(`${project}`, 'project-main-btn');

    projectBtn.id = `project${idCounter}`;
    projectBtn.onclick = clickProject;

    mainProjectContainer.appendChild(newProjectContainer);
    newProjectContainer.appendChild(projectBtn);
}

function crateProjectInterface() {
    const content = document.getElementById('content');
    const form = createForm('New-Project', '', 'GET', 'new-project-interface');
    const input = createFullInput('projectName', 'new-project-name-label', 'text', 'projectName', 'new-project-name-input', 'projectName', 'Project Title');
    const submitButton = createButton('Submit', 'submit-btn');

    form.id = 'new-project-form';

    content.appendChild(form);
    form.appendChild(input);
    form.appendChild(submitButton);

    submitButton.type = 'button';
    submitButton.addEventListener('click', () => {
        const inputValue = document.getElementById('projectName');

        projectIntoArray();
        createProjectDom(inputValue.value);
        deleteForm();
    });
}

export default function newProject() {
    const newProjectBtn = document.getElementById('new-project-btn');
    createDefaultProject();
    newProjectBtn.addEventListener('click', () => {
        crateProjectInterface();
        newProjectId();
    });
}