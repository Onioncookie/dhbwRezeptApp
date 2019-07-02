import {Ingridient} from './ingridient';

export class Recipe {
  name: string;
  pictureUrl: string;
  ingridientList: Ingridient[];
  description: string;
  constructor(mName, mUrl, mIngridients: Ingridient[], mDescription) {
    this.name = mName;
    this.pictureUrl = mUrl;
    this.ingridientList = mIngridients;
    this.description = mDescription;
  }
}
