import firstLoad from './functions/first-load';
import newProject from './page-elements/new-project';
import { newTaskCall } from './page-elements/new-task';
import {
    sortAll, sortImportant, sortToday, sortNext7Days,
} from './functions/sort-tasks';
import './style.css';

firstLoad();
newProject();
newTaskCall();
sortAll();
sortImportant();
sortToday();
sortNext7Days();
