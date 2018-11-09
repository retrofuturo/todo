export default function ($stateProvider){

  $stateProvider
    .state('form', {
      url: '/form',
      component: 'taskFormComponent',
    })
    .state('edit-form', {
      url: '/edit-form/{id}',
      component: 'taskFormComponent',
    })
    .state('view', {
      url: '/view',
      component: 'taskViewComponent',
    })
    .state('otherwise', {
      url: '*path',
      component: 'taskFormComponent',
    });
}

