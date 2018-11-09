class TaskFormController {
  static get $inject() {
    return ['ToDoService', '$state', '$stateParams'];
  }

  constructor(ToDoService, $state, $stateParams) {
    this.ToDoService = ToDoService;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.task = {
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
    };
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

  getStatus() {
    let statusesArr = [];
    for (let i = 0; i < this.task.points.length; i++) {
      statusesArr.push(this.task.points[i].status);
    }
    let done = statusesArr.every((elem) => {
      return elem === 'done';
    });
    let planned = statusesArr.every((elem) => {
      return elem === 'planned';
    });
    if (done) {
      this.task.status = 'done';
    } else if (planned) {
      this.task.status = 'planned';
    } else {
      this.task.status = 'in progress';
    }
  }

  onSubmit() {
    if (!this.$stateParams.id) {
      this.ToDoService.addTask(this.task);
    } else if (this.$stateParams.id) {
      this.ToDoService.editTask(this.task, this.$stateParams.id);
    }
    this.task = {
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
    };
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
