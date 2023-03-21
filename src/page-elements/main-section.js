import {
    createSection, createDiv, createTitle, createParagraph,
} from './dom-elements';

function createTopSection() {
    const container = createDiv('main-content-header', 'main-content-header');
    const title = createTitle(1, 'Name of page', 'main-content-title', 'main-content-title-h1');

    container.appendChild(title);

    return container;
}

function createProjectTitleSection() {
    const container = createDiv('project-title-section', 'project-title-section)');
    const title = createTitle(1, 'Name of page', 'project-title', 'project-title-h1');

    container.appendChild(title);

    return container;
}

function createProjectContainer() {
    const container = createDiv('project-container', 'project-container');
    const title = createTitle(2, 'Task name', 'project1', 'project1');
    const paragraph = createParagraph('Description', 'paragraph1', 'paragraph1');
    const paragraph2 = createParagraph('Date', 'paragraph1', 'paragraph1');
    const paragraph3 = createParagraph('Status', 'paragraph1', 'paragraph1');

    container.appendChild(title);
    container.appendChild(paragraph);
    container.appendChild(paragraph2);
    container.appendChild(paragraph3);

    return container;
}

function createTaskSection() {
    const container = createDiv('task-content-container', 'task-content-container');
    const project = createProjectContainer();

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
