import {
    createSection, createDiv, createTitle, createButton,
} from './dom-elements';

function createTopSection() {
    const container = createDiv('main-content-header', 'main-content-header');
    const title = createTitle(1, 'All tasks', 'main-content-title', 'main-content-title-h1');

    container.appendChild(title);

    return container;
}

function createProjectTitleSection() {
    const container = createDiv('project-title-section', 'project-title-section)');
    const title = createTitle(1, 'Project Name', 'project-title', 'project-title-h1');

    container.appendChild(title);

    return container;
}

function createTaskContainer() {
    const container = createDiv('task-container', 'task-container');
    const button = createButton('Create new task', 'new-task-btn');

    button.id = 'new-task-btn';

    container.appendChild(button);

    return container;
}

function createTaskSection() {
    const container = createDiv('task-content-container', 'task-content-container');
    const project = createTaskContainer();

    container.appendChild(project);

    return container;
}

export default function createMainSection() {
    const section = createSection('main-content-container', 'main-content-container');
    const topSection = createTopSection();
    const midSection = createProjectTitleSection();
    const botSection = createTaskSection();

    section.appendChild(topSection);
    section.appendChild(midSection);
    section.appendChild(botSection);

    return section;
}
