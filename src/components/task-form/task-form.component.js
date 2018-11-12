import Task from '../../models/task.model';

class TaskFormController {
  static get $inject() {
    return ['ToDoService', '$state', '$stateParams'];
  }

  constructor(ToDoService, $state, $stateParams) {
    this.ToDoService = ToDoService;
    this.$state = $state;
    this.$stateParams = $stateParams;

    this.task = new Task();

    /* this.task = {
      title: '',
      status: '',
      points: [
        {
          label: 'Point 1',
          content: '',
          switcher: true,
          status: 'planned',
          statuses: [
            { value: 'planned' },
            { value: 'in progress' },
            { value: 'done' },
          ],
        },
        {
          label: 'Point 2',
          content: '',
          switcher: true,
          status: 'planned',
          statuses: [
            { value: 'planned' },
            { value: 'in progress' },
            { value: 'done' },
          ],
        },
      ],
    }; */
  }

  $onInit() {
    this.getStatus();
    if (this.$stateParams.id) {
      this.getTask();
    }
  }

  switch(index) {
    this.task.points[index].switcher = !this.task.points[index].switcher;
  }

  addPoint() {
    this.task.addPoint();
  }

  getStatus() {
    const statusesArr = [];
    for (let i = 0; i < this.task.points.length; i += 1) {
      statusesArr.push(this.task.points[i].status);
    }
    const done = statusesArr.every(elem => elem === 'done');
    const planned = statusesArr.every(elem => elem === 'planned');

    if (done) {
      this.task.status = 'done';
    } else if (planned) {
      this.task.status = 'planned';
    } else {
      this.task.status = 'in progress';
    }
  }

  removePoint(index){
    this.task.removePoint(index);
    this.getTask();
  }

  removeTask(index) {
    this.ToDoService.removeTask(index);
    this.$state.go('view');
  }

  onSubmit() {
    if (!this.$stateParams.id) {
      this.ToDoService.addTask(this.task);
    } else if (this.$stateParams.id) {
      this.ToDoService.editTask(this.task, this.$stateParams.id);
    }
    this.task = new Task();
    this.$state.go('view');
  }

  getTask() {
    this.task = this.ToDoService.getTask(this.$stateParams.id);
  }
}

export default {
  controller: TaskFormController,
  template: require('./task-form.component.html'),
};
