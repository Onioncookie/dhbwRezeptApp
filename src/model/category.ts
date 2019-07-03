import {Ingridient} from './ingridient';

export class Category {
  name: string;
  ingridientList: Ingridient[];
  constructor(mName) {
    this.name = mName;
  }
}
