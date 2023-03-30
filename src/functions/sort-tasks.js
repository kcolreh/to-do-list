import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { taskArray } from './task-factory';
import { cleanString, removeElementsByClass } from './project-factory';
import { sort7DaysBoolean, sortTodayBoolean } from './date-logic';

let projectStatus = 'defaultProject';

export function getProjectStatus(status) {
    projectStatus = status;
    return projectStatus;
}

export function sortAll() {
    const allBtn = document.getElementById('sidebar-btn-1');
    const mainSortTitle = document.getElementById('main-content-title-h1');

    allBtn.addEventListener('click', () => {
        mainSortTitle.innerHTML = allBtn.innerHTML;
        removeElementsByClass('task');
        taskArray.forEach((task) => {
            if (task.projectName === projectStatus) {
                const stringTask = JSON.stringify(task);
                cleanString(stringTask);
            }
        });
    });
}

export function sortNext7Days() {
    const daysBtn = document.getElementById('sidebar-btn-2');
    const mainSortTitle = document.getElementById('main-content-title-h1');

    daysBtn.addEventListener('click', () => {
        removeElementsByClass('task');
        mainSortTitle.innerHTML = daysBtn.innerHTML;
        taskArray.forEach((task) => {
            if (sort7DaysBoolean(task.date) === true && task.projectName === projectStatus) {
                const stringTask = JSON.stringify(task);
                cleanString(stringTask);
            }
        });
    });
}

export function sortToday() {
    const todayBtn = document.getElementById('sidebar-btn-3');
    const mainSortTitle = document.getElementById('main-content-title-h1');

    todayBtn.addEventListener('click', () => {
        removeElementsByClass('task');
        mainSortTitle.innerHTML = todayBtn.innerHTML;
        taskArray.forEach((task) => {
            if (sortTodayBoolean(task.date) === true && task.projectName === projectStatus) {
                const stringTask = JSON.stringify(task);
                cleanString(stringTask);
            }
        });
    });
}

export function sortImportant() {
    const importantBtn = document.getElementById('sidebar-btn-4');
    const mainSortTitle = document.getElementById('main-content-title-h1');

    importantBtn.addEventListener('click', () => {
        mainSortTitle.innerHTML = importantBtn.innerHTML;
        removeElementsByClass('task');
        taskArray.forEach((task) => {
            if (task.status === true && task.projectName === projectStatus) {
                const stringTask = JSON.stringify(task);
                cleanString(stringTask);
            }
        });
    });
}
