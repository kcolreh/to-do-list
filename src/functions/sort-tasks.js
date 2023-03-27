import { taskArray } from './task-factory';
import { cleanString, removeElementsByClass } from './project-factory';

export function sortAll() {
    const allBtn = document.getElementById('sidebar-btn-1');

    allBtn.addEventListener('click', () => {
        removeElementsByClass('task');
        taskArray.forEach((task) => {
            const stringTask = JSON.stringify(task);
            cleanString(stringTask);
        });
    });
}

export function sortNext7Days() {
    const daysBtn = document.getElementById('sidebar-btn-2');

    taskArray.forEach((task) => {
        removeElementsByClass('task');
        if (task.projectName === projectSelected) {
            const stringTask = JSON.stringify(task);
            cleanString(stringTask);
        }
    });
}

export function sortToday() {
    const todayBtn = document.getElementById('sidebar-btn-3');

    taskArray.forEach((task) => {
        removeElementsByClass('task');
        if (task.projectName === projectSelected) {
            const stringTask = JSON.stringify(task);
            cleanString(stringTask);
        }
    });
}

export function sortImportant() {
    const importantBtn = document.getElementById('sidebar-btn-4');

    importantBtn.addEventListener('click', () => {
        removeElementsByClass('task');
        taskArray.forEach((task) => {
            if (task.status === true) {
                const stringTask = JSON.stringify(task);
                cleanString(stringTask);
            }
        });
    });
}
