import { taskArray, removeTasks, taskFactory } from './task-factory';
import { createTaskDom } from '../page-elements/new-task';
import { getProjectStatus } from './sort-tasks';
import { createProjectDom } from '../page-elements/new-project';

const projectArray = [];

function storeProjectInLocal() {
    projectArray.forEach((project) => {
        window.localStorage.setItem(project, project);
    });
}

export function renderStoredProjects() {
    for (let i = 0; i < localStorage.length; i += 1) {
        if (window.localStorage.key(i).includes('projectName') === false) {
            projectArray.push(window.localStorage.key(i));
            createProjectDom(window.localStorage.key(i));
        }
    }
}

export function projectIntoArray() {
    const nameInput = document.getElementById('projectName');
    const newProject = nameInput.value;

    projectArray.push(newProject);
    storeProjectInLocal();
}

export function deleteProject() {
    projectArray.forEach((project) => {
        if (project === this.previousElementSibling.innerHTML) {
            const indexOfProject = projectArray.indexOf(project);
            projectArray.splice(indexOfProject, 1);
            this.parentNode.remove();
            removeTasks(project);
            window.localStorage.removeItem(project);
        } return projectArray;
    });
    noProjectsLeft();
}

export function renderProject(projectSelected) {
    removeElementsByClass('task');
    taskArray.forEach((task) => {
        if (task.projectName === projectSelected) {
            const stringTask = JSON.stringify(task);
            cleanString(stringTask);
        }
    });
}

export function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

export function clickProject() {
    const projectName = document.getElementById('project-title-h1');
    const taskBtn = document.getElementById('new-task-btn');

    projectName.innerHTML = this.innerHTML;
    getProjectStatus(projectName.innerHTML);
    renderProject(this.innerHTML);
    taskBtn.disabled = false;
}

export function noProjectsLeft() {
    const projectName = document.getElementById('project-title-h1');
    const projectContainer = document.getElementById('project-container');
    const newTaskBtn = document.getElementById('new-task-btn');
    if (projectContainer.hasChildNodes() === false) {
        projectName.innerHTML = 'Please make a new project!';
        newTaskBtn.disabled = true;
    }
}

function jsonToProjectName(fullString) {
    const searchName = ':"';
    const searchDescription = '","name"';
    const indexOfName = fullString.indexOf(searchName);
    const infexOfDescription = fullString.indexOf(searchDescription);
    const name = fullString.slice(indexOfName + 2, infexOfDescription);
    return name;
}

function jsonToName(fullString) {
    const searchName = 'name';
    const searchDescription = '","description';
    const indexOfName = fullString.indexOf(searchName);
    const infexOfDescription = fullString.indexOf(searchDescription);
    const name = fullString.slice(indexOfName + 7, infexOfDescription);
    return name;
}

function jsonToDescription(fullString) {
    const searchDescription = 'description';
    const searchDate = '","date';
    const indexOfDescription = fullString.indexOf(searchDescription);
    const indexOfDate = fullString.indexOf(searchDate);
    const name = fullString.slice(indexOfDescription + 14, indexOfDate);
    return name;
}

function jsonToDate(fullString) {
    const searchDate = 'date';
    const searchStatus = '","status';
    const indefOfDate = fullString.indexOf(searchDate);
    const indexOfStatus = fullString.indexOf(searchStatus);
    const name = fullString.slice(indefOfDate + 7, indexOfStatus);
    return name;
}

function jsonToStatus(fullString) {
    const searchStatus = 'status';
    const indexOfStatus = fullString.indexOf(searchStatus);
    const name = fullString.slice(indexOfStatus + 8, -1);
    return name;
}

export function cleanString(fullString) {
    const name = jsonToName(fullString);
    const description = jsonToDescription(fullString);
    const date = jsonToDate(fullString);
    const status = jsonToStatus(fullString);
    createTaskDom(name, description, date, status);
}

export function cleanStringForTask(fullString) {
    const project = jsonToProjectName(fullString);
    const name = jsonToName(fullString);
    const description = jsonToDescription(fullString);
    const date = jsonToDate(fullString);
    const status = jsonToStatus(fullString);
    if (status === 'true') {
        return taskFactory(project, name, description, date, true);
    } return taskFactory(project, name, description, date, false);
}
