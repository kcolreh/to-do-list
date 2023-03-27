import { taskArray } from './task-factory';
import { createTaskDom } from '../page-elements/new-task';

const projectArray = [];

export function projectIntoArray() {
    const nameInput = document.getElementById('projectName');
    const newProject = nameInput.value;

    projectArray.push(newProject);
}

function createSelectedProjectArray(projectSelected) {
    const selectedProjectTasks = [];
    removeElementsByClass('task');
    taskArray.forEach((task) => {
        if (task.projectName === projectSelected) {
            const stringTask = JSON.stringify(task);
            selectedProjectTasks.push(stringTask);
            cleanString(stringTask);
        }
    });
}

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

export function clickProject() {
    const projectName = document.getElementById('project-title-h1');
    projectName.innerHTML = this.innerHTML;
    createSelectedProjectArray(this.innerHTML);
}

export function defaultProjectClick() {
    const projectName = document.getElementById('project-title-h1');
    projectName.innerHTML = 'Default project';
    createSelectedProjectArray('defaultProject');
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

function cleanString(fullString) {
    const name = jsonToName(fullString);
    const description = jsonToDescription(fullString);
    const date = jsonToDate(fullString);
    const status = jsonToStatus(fullString);
    createTaskDom(name, description, date, status);
}
