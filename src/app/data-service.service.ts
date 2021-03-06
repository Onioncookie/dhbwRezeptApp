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
  // All currently available Ingredients
  ingredientsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([this.ingridientList]);
  ingredientList: Observable<any[]> = this.ingredientsListSubject.asObservable();


  // Some random Ingredients to add to predefined Recipes
  testIngridient = new Ingridient('Eggs', 'Eggs and Egg products', 'pcs');
  testIngridient1 = new Ingridient('XXL Eggs', 'Eggs and Egg products', 'pcs');
  testIngridient2 = new Ingridient('Flour', 'Baked Goods', 'Gramm');
  testIngridient3 = new Ingridient('Vokda', 'Alcoholic Beverages', 'mL');
  testIngridient4 = new Ingridient('Milk', 'Dairy Products', 'mL');


  constructor() {
    // Initial sort for the categoryList, as the recipeListData is not sorted
    this.sortIngridientCategoryList();
    // Add all predefined recipes
    this.addPredefinedRecipes();
    // Test values
    this.addIngridientToRecipe('Pancakes', this.testIngridient, 1);
    this.addIngridientToRecipe('Pancakes', this.testIngridient1, 2);
    this.addIngridientToRecipe('Pancakes', this.testIngridient2, 200);
    this.addIngridientToRecipe('Vodka', this.testIngridient3, 1000);
    this.addIngridientToRecipe('Cookies', this.testIngridient, 4);
    this.addIngridientToRecipe('Cookies', this.testIngridient4, 150);
    this.addIngridientToRecipe('Waffles', this.testIngridient4, 350);
    this.addIngridientToRecipe('Waffles', this.testIngridient, 1);
    this.printRecipeList();
    this.addAllIngredientsToCategoryList();
    this.addAllIngredientToIngredientObs();
    this.addAllingredientsToAllIngredientsRecipe();


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

  addAllingredientsToAllIngredientsRecipe() {
    for (const ing of this.ingridientList.ingridientList) {
      this.addIngridientToRecipe('All Ingredients', ing, 0);
    }
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
            console.log('ing found');
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

  addAllIngredientsToCategoryList() {
    for (const ing of this.ingridientList.ingridientList) {
      this.addIngridientToCategoryList(ing);
    }
  }

  addAllIngredientToIngredientObs() {
    const ings = this.ingredientsListSubject.value;
    ings.push(this.categoryList);
    this.ingredientsListSubject.next(ings);
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


// ShoppingCart Functions
//
//


  // Adds all recipe ingredients to the shopping cart
  addRecipeToCart(recipeItem: Recipe) {
    // Use dataservice observable
    const cart = this.shoppingCartSubject.value;
    /*Loop recipeItem to find Ingredient needed for it
    Datastructure:
    #Recipe
     # categorylist
      #  CategoryList
       #   Ingredient => needed
    */
    for (const cat of recipeItem.categoryList.categoryList) {
      for (const ing of cat.ingridientList) {
        // Found Ingredient to add to cart
        if (ing.name !== '') {
          // Lookup if it already exists in cart
          //  if yes => add amount to existing
          //  no => add new Ingredient to observable
          if (this.searchDuplicateCart(ing)) {
            for (const cartIng of cart) {
              if (cartIng.name === ing.name) {
                cartIng.amountCart += ing.amount;
              }
            }
          } else {
            ing.amountCart = ing.amount;
            cart.push(ing);
          }
        }
      }
    }
    this.shoppingCartSubject.next(cart);
  }

  // Search for a duplicate Ingredient within cart observeable
  searchDuplicateCart(mIng: Ingridient) {
    const cart = this.shoppingCartSubject.value;
    for (const ingCart of cart) {
      if (ingCart.name === mIng.name) {
        console.log('Found dup', ingCart.name, mIng.name);
        return true;
      }
    }
  }

  addIngredientToCart(ingre: Ingridient) {
    // Use dataservice observable
    const cart = this.shoppingCartSubject.value;
    if (this.searchDuplicateCart(ingre)) {
      for (const cartIng of cart) {
        if (cartIng.name === ingre.name) {
          cartIng.amountCart += ingre.amount;
        }
      }
    } else {
      ingre.amountCart = ingre.amount;
      cart.push(ingre);
    }
    this.shoppingCartSubject.next(cart);
  }


  // IngredientList Functions
  //
  //

  // Adds Ingredient to the All Ingredient Recipe => New possible Ingredient for all recipes
  addIngriedent(mIngredient: Ingridient) {
    this.addIngridientToRecipe('All Ingredients', mIngredient, 0);
    console.log(this.printRecipeList());
  }


}
