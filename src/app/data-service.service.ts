import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe';
import {Ingridient} from '../model/ingridient';
import {Category} from '../model/category';
import {CategoryListData} from '../model/categoryListData';
import {IngridientListData} from '../model/ingridientListData';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  recipeList: Recipe[] = [];
  testIngridient = new Ingridient('Eggs', 'Eggs and Egg productss', 'pcs');
  testRecipe = new Recipe('TestRecipe', 'testURL', 'Bla');
  // Contains all Ingridients,sorted by their Category
  categoryList = new CategoryListData();
  // First import of all ingridients
  ingridientList = new IngridientListData();

  constructor() {
    // First sort for the categoryList, as the recipeListData is not sorted
    this.sortIngridientCategoryList();
    this.addRecipe(this.testRecipe);
    this.printRecipeList();
  }
  // Recipe Functions
  addRecipe(recipe: Recipe) {
    this.recipeList.push(recipe);
  }
  printRecipeList() {
    this.recipeList.forEach(value => console.log(value));
  }

  printCategoryList() {
    this.categoryList.categoryList.forEach(value => console.log(value));
  }
  addIngridientToRecipe(ingridient: Ingridient) {
  }
// Category Functions
  addCategory(mCategory: Category) {
    this.categoryList.categoryList.push(mCategory);
    this.sortIngridientCategoryList();
  }

  addIngridientToCategoryList(mIngridient: Ingridient) {
    let found = false;
    for (const value of this.categoryList.categoryList) {
      if (value.name === mIngridient.category) {
        value.ingridientList.push(mIngridient);
        found = true;
        return;
      }
    }
    if (!found) {
      console.log('Error could not find Category ', mIngridient.name);
    }
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
