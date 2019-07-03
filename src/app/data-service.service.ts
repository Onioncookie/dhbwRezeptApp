import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe';
import {Ingridient} from '../model/ingridient';
import {Category} from '../model/category';
import {CategoryListData} from '../model/categoryListData';
import {forEach} from '@angular/router/src/utils/collection';
import {IngridientListData} from '../model/ingridientListData';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  recipeList: Recipe[];
  // Contains all Ingridients,sorted by their Category
  categoryList = new CategoryListData();
  // First import of all ingridients
  ingridientList = new IngridientListData();

  constructor() {
    // First sort for the categoryList, as the recipeListData is not sorted
    this.sortIngridientCategoryList();
    console.log();
  }

  printCategoryList() {
    this.categoryList.categoryList.forEach(value => console.log(value));
  }

  addCategory(mCategory: Category) {
    this.categoryList.categoryList.push(mCategory);
    this.sortIngridientCategoryList();
  }

  addIngridientToCategoryList(mIngridient: Ingridient) {
    this.categoryList.categoryList.forEach(value => {
      if (value.name === mIngridient.category) {
        value.ingridientList.push(mIngridient);
        return;
      } else {
        console.log('Error addIngridientToCategoryList, could not find ', mIngridient.category);
      }
    });
  }

// Sorts the CategoryList Array alphabetically for a future use and display
  sortIngridientCategoryList() {
    this.categoryList.categoryList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
