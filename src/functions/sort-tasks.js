import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { taskArray } from './task-factory';
import { cleanString, removeElementsByClass } from './project-factory';

export function sortAll() {
    const allBtn = document.getElementById('sidebar-btn-1');
    const mainSortTitle = document.getElementById('main-content-title-h1');

    allBtn.addEventListener('click', () => {
        mainSortTitle.innerHTML = allBtn.innerHTML;
        removeElementsByClass('task');
        taskArray.forEach((task) => {
            const stringTask = JSON.stringify(task);
            cleanString(stringTask);
        });
    });
}
// not worked on
export function sortNext7Days() {
    const daysBtn = document.getElementById('sidebar-btn-2');
    const mainSortTitle = document.getElementById('main-content-title-h1');

    daysBtn.addEventListener('click', () => {
        removeElementsByClass('task');
        mainSortTitle.innerHTML = daysBtn.innerHTML;
        taskArray.forEach((task) => {
            const distance = formatDistanceToNowStrict(new Date(task.date), { unit: 'day' });
            if (parseInt(distance, 10) < 8) {
                const stringTask = JSON.stringify(task);
                cleanString(stringTask);
            }
        });
    });
}
// not worked on
export function sortToday() {
    const todayBtn = document.getElementById('sidebar-btn-3');
    const mainSortTitle = document.getElementById('main-content-title-h1');

    todayBtn.addEventListener('click', () => {
        removeElementsByClass('task');
        mainSortTitle.innerHTML = todayBtn.innerHTML;
        taskArray.forEach((task) => {
            const distance = formatDistanceToNowStrict(new Date(task.date), { unit: 'day' });
            if (parseInt(distance, 10) === 1) {
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
            if (task.status === true) {
                const stringTask = JSON.stringify(task);
                cleanString(stringTask);
            }
        });
    });
}
