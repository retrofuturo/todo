import Point from './point.model';

export default class Task {
  constructor(title = '', status = '') {
    this.title = title;
    this.status = status;
    this.points = [];
    this.addPoint('');
  }

  addPoint(content) {
    const label = `Point ${this.points.length + 1}`;
    this.points.push(new Point(label, content));
  }

  removePoint(index) {
    this.points.splice(index, 1);
  }
}
