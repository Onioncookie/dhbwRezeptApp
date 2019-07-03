import {Ingridient} from './ingridient';

export class Recipe {
  name: string;
  pictureUrl: string;
  ingridientList: Ingridient[];
  description: string;
  constructor(mName, mUrl, mDescription) {
    this.name = mName;
    this.pictureUrl = mUrl;
    this.description = mDescription;
  }
}
