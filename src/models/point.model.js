import Status from './status.model';

export default class Point {
  constructor(label = 'Point') {
    this.label = label;
    this.content = '';
    this.switcher = true;
    this.status = 'planned';
    this.statuses = [
      new Status('planned'),
      new Status('in progress'),
      new Status('done'),
    ];
  }
}
