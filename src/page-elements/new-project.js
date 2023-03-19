import { createButton, createForm, createFullInput } from './dom-elements';

/* function createProject(name) {
    const newProject = createButton(name, 'project');
}
*/

function crateProjectInterface() {
    const content = document.getElementById('content');
    const form = createForm('New-Project', '#', 'POST', 'new-project-interface');
    const input = createFullInput('projectName', 'new-project-name-label', 'text', 'projectName', 'new-project-name-input', 'projectName');
    const submitButton = createButton('Submit', 'submit-btn');

    content.appendChild(form);
    form.appendChild(input);
    form.appendChild(submitButton);
}

export default function newProject() {
    const newProjectBtn = document.getElementById('new-project-btn');

    newProjectBtn.addEventListener('click', () => {
        crateProjectInterface();
    });
}
