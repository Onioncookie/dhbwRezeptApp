import {CategoryListData} from './categoryListData';

export class Recipe {
  name: string;
  pictureUrl: string;
  // Fresh import of all categories with empty ingridientList
  categoryList = new CategoryListData();
  description: string;
  constructor(mName, mUrl, mDescription) {
    this.name = mName;
    this.pictureUrl = mUrl;
    this.description = mDescription;
  }
}
