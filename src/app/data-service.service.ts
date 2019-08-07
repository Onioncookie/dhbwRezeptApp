import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe';
import {Ingridient} from '../model/ingridient';
import {Category} from '../model/category';
import {CategoryListData} from '../model/categoryListData';
import {IngridientListData} from '../model/ingridientListData';
import {BehaviorSubject, Observable} from 'rxjs';
import {RecipeListData} from '../model/recipeListData';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // Observable for recipeList
  recipeListSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  recipeList: Observable<Recipe[]> = this.recipeListSubject.asObservable();
  // Obserable for the shoppingcart
  shoppingCartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  shoppingCartList: Observable<Recipe[]> = this.shoppingCartSubject.asObservable();
  // Contains all Ingridients,sorted by their Category
  categoryList = new CategoryListData();
  // First import of all ingridients
  ingridientList = new IngridientListData();
  // Initialisation of all predefined recipes from recipeListData model
  predefinedRecipe = new RecipeListData();
  // Output Value from recipeList component => used in recipeItem component
  recipeItem: Recipe;


  // Some random Ingredients to add to predefined Recipes
  testIngridient = new Ingridient('Eggs', 'Eggs and Egg products', 'pcs');
  testIngridient1 = new Ingridient('XXL Eggs', 'Eggs and Egg products', 'pcs');
  testIngridient2 = new Ingridient('Flour', 'Baked Goods', 'Gramm');
  testIngridient3 = new Ingridient('Vokda', 'Alcoholic Beverages', 'mL');

  constructor() {
    // Initial sort for the categoryList, as the recipeListData is not sorted
    this.sortIngridientCategoryList();
    // Add all predefined recipes
    this.addPredefinedRecipes();
    // Test values
    this.addIngridientToRecipe('Pancakes', this.testIngridient, 1);
    this.addIngridientToRecipe('Pancakes', this.testIngridient1, 2);
    this.addIngridientToRecipe('Pancakes', this.testIngridient2, 200);
    this.addIngridientToRecipe('Vodka', this.testIngridient3, '1.000');
    this.printRecipeList();


  }

  // Recipe Functions
  ///
  ///
  addRecipe(recipe: Recipe) {
    const recipeList = this.recipeListSubject.value;
    recipeList.push(recipe);
    this.sortAllRecipesByName();
    this.recipeListSubject.next(recipeList);
  }

  private addPredefinedRecipes() {
    this.predefinedRecipe.recipeList.forEach(value => {
      this.addRecipe(value);
    });
    this.sortAllRecipesByName();
  }

  sortAllRecipesByName() {
    const recipeList = this.recipeListSubject.value;
    recipeList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    this.recipeListSubject.next(recipeList);
  }

  printRecipeList() {
    this.recipeList.forEach(value => console.log(value));
  }

  addIngridientToRecipe(mRecipeName, mIngridient: Ingridient, mAmount) {
    const recipeList = this.recipeListSubject.value;
    mIngridient.amount = mAmount;
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
  printCategoryList() {
    this.categoryList.categoryList.forEach(value => console.log(value));
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
