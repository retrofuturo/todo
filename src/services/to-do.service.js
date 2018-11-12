
export default class ToDoService {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }
  getTask(id) {
    return this.tasks[id];
  }
  editTask(task, id) {
    this.tasks[id] = task;
  }
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}
