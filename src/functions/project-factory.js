function selectProject(project) {
    const projectName = document.getElementById('project-title-h1');

    projectName.innerHTML = project;
}

export const projectFactory = (name, task) => ({
    name, task,
});

export function addProjectToFactory() {
    projectFactory(this.innerHTML);
    selectProject(this.innerHTML);
}
