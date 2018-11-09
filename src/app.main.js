import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import materialIcon from 'angular-material-icons';
import ngAnimate from 'angular-animate';

import 'angular/angular-csp.css';
import 'angular-material/angular-material.css';
import './index.scss';

import AppComponent from './app.component';
import TaskFormComponent from './components/task-form/task-form.component';
import TaskViewComponent from './components/task-view/task-view.component';
import routes from './index.route';
import ToDoService from './services/to-do.service';

angular.module('main', [
  ngMaterial,
  uiRouter,
  materialIcon,
  ngAnimate,
])
  .component('app', AppComponent)
  .component('taskFormComponent', TaskFormComponent)
  .component('taskViewComponent', TaskViewComponent)
  .service('ToDoService', ToDoService)
  .config(['$stateProvider', routes])
  .run();
