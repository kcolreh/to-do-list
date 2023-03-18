import firstLoad from './functions/first-load';

import './style.css';

/*
    main logic:

    1.User creates a project
    1.1.Project includes : name, tasks, status.

    2.User creates tasks for the project.
    2.1. Tasks includes : title, description, importance, status
    2.2. Tasks are added to the project under which the were created

    3.User can remove and change all the date realtime
    3.1.User data is stored locally on users computer

*/

// 1.User creates a project
const projectFactory = (name, task, dueDate, status) => ({
    name, task, dueDate, status,
});

//  2.User creates tasks for the project.
const taskFactory = (title, description, importance, status) => ({
    title, description, importance, status,
});

const task1 = taskFactory('start project', 'due the set up', '10/10/2222', false);

//  2.2. Tasks are added to the project under which the were created
function addTaskToProject() {
    const newProject = projectFactory('booty', task1, false);
    console.log(newProject);
}

addTaskToProject();
firstLoad();
