class TaskViewController {
  static get $inject() {
    return ['ToDoService'];
  }

  constructor(ToDoService) {
    this.ToDoService = ToDoService;
  }
  $onInit() {
    this.tasks = this.ToDoService.getTasks();
  }
}

export default {
  controller: TaskViewController,
  template: require('./task-view.component.html'),
};
