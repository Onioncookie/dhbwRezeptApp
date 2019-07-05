import {Category} from './category';

export class CategoryListData {
  categoryList: Category[] = [];
  constructor() {
    this.categoryList.push(new Category('Baked Goods'));
    this.categoryList.push(new Category('Eggs and Egg products'));
    this.categoryList.push(new Category('Fresh Meat'));
    this.categoryList.push(new Category('Vegetables'));
    this.categoryList.push(new Category('Fruits'));
    this.categoryList.push(new Category('Dairy Products'));
    this.categoryList.push(new Category('Dry Assortment'));
  }
}

