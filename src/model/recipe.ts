import {Ingridient} from './ingridient';
import {Category} from './category';

export class Recipe {
  name: string;
  pictureUrl: string;
  categoryList: Category[];
  description: string;
  constructor(mName, mUrl, mDescription) {
    this.name = mName;
    this.pictureUrl = mUrl;
    this.description = mDescription;
  }
}
