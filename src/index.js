import firstLoad from './functions/first-load';
import { newProject, defaultProjectLoad } from './page-elements/new-project';
import { noProjectsLeft, renderStoredProjects } from './functions/project-factory';
import { newTaskCall } from './page-elements/new-task';
import {
    sortAll, sortImportant, sortToday, sortNext7Days,
} from './functions/sort-tasks';
import './style.css';
import { localToArray } from './functions/task-factory';

firstLoad();
newProject();
newTaskCall();
sortAll();
sortImportant();
sortToday();
sortNext7Days();
renderStoredProjects();
noProjectsLeft();
defaultProjectLoad();
localToArray();
