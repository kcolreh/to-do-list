import {
    createSection, createDiv, createTitle, createButton,
} from './dom-elements';

function createTopSidebar() {
    const container = createDiv('top-sidebar-container', 'top-sidebar');
    const title = createTitle(1, 'To Do', 'sidebar-title', 'sidebar-title-h1');

    container.appendChild(title);

    return container;
}

function createMidSidebar() {
    const container = createDiv('mid-sidebar-container', 'mid-sidebar');
    const nameArray = ['All tasks', 'Next 7 days', 'Today', 'Important'];
    let buttonIdCounter = 1;

    nameArray.forEach((name) => {
        const button = createButton(`${name}`, 'sidebar-btn');

        button.id = `sidebar-btn-${buttonIdCounter}`;
        buttonIdCounter += 1;
        container.appendChild(button);
    });

    return container;
}

function createBotSidebar() {
    const container = createDiv('bot-sidebar-container', 'bot-sidebar');
    const title = createTitle(2, 'Projects', 'sidebar-title', 'sidebar-title-h2');
    const button = createButton('Create new project', 'new-project-btn');
    const projectContainer = createDiv('project-container', 'project-container');

    button.id = 'new-project-btn';

    container.appendChild(title);
    container.appendChild(button);
    container.appendChild(projectContainer);

    return container;
}

export default function createSideSection() {
    const section = createSection('full-sidebar-container', 'full-sidebar');
    const topSection = createTopSidebar();
    const midSection = createMidSidebar();
    const botSection = createBotSidebar();

    section.appendChild(topSection);
    section.appendChild(midSection);
    section.appendChild(botSection);

    return section;
}
