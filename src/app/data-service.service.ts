import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe';
import {Ingridient} from '../model/ingridient';
import {Category} from '../model/category';
import {CategoryListData} from '../model/categoryListData';
import {IngridientListData} from '../model/ingridientListData';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // Observable for recipeList
  recipeListSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  recipeList: Observable<Recipe[]> = this.recipeListSubject.asObservable();
  testIngridient = new Ingridient('Eggs', 'Eggs and Egg products', 'pcs');
  testRecipe = new Recipe('TestRecipe', 'testURL', 'Bla');
  // Contains all Ingridients,sorted by their Category
  categoryList = new CategoryListData();
  // First import of all ingridients
  ingridientList = new IngridientListData();
  // Output Value from recipeList component => used in recipeItem component
  recipeItem: any;

  constructor() {
    // Initial sort for the categoryList, as the recipeListData is not sorted
    this.sortIngridientCategoryList();

    // Predefined recipes
    this.addRecipe(new Recipe('Pancakes',
      'https://www.maxpixel.net/static/photo/1x/Syrup-Pancakes-Breakfast-Maple-Food-Sweet-2291908.jpg',
      'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk,' +
      ' egg and melted butter; mix until smooth.\n' +
      'Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately' +
      ' 1/4 cup for each pancake. Brown on both sides and serve hot.'));

    // Test values
    this.addRecipe(this.testRecipe);
    this.addRecipe(this.testRecipe);
    this.addRecipe(this.testRecipe);
    this.addIngridientToRecipe('TestRecipe', this.testIngridient);
    this.printRecipeList();
  }

  // Recipe Functions
  ///
  ///
  addRecipe(recipe: Recipe) {
    const recipeList = this.recipeListSubject.value;
    recipeList.push(recipe);
    this.recipeListSubject.next(recipeList);
  }

  printRecipeList() {
    this.recipeList.forEach(value => console.log(value));
  }

  printCategoryList() {
    this.categoryList.categoryList.forEach(value => console.log(value));
  }

  addIngridientToRecipe(mRecipeName, mIngridient: Ingridient) {
    const recipeList = this.recipeListSubject.value;
    for (const recipe of recipeList) {
      // Find recipe
      if (recipe.name === mRecipeName) {
        let found = false;
        // Find category of the new ingridient
        for (const value of recipe.categoryList.categoryList) {
          if (value.name === mIngridient.category) {
            value.ingridientList.push(mIngridient);
            found = true;
            return;
          }
        }
        if (!found) {
          console.log('addIngridientToRecipe: Error could not find Category', mIngridient.name);
        }
      }
    }
    this.recipeListSubject.next(recipeList);
  }

// Category Functions
  ///
  ///
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
