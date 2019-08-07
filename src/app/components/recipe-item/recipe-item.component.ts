import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import {Recipe} from '../../../model/recipe';
import {Ingridient} from '../../../model/ingridient';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit() {
  }

// Adds all recipe ingredients to the shopping cart
  addRecipeToCart(recipeItem: Recipe) {
    // Use dataservice observable
    const cart = this.dataService.shoppingCartSubject.value;
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
                cartIng.amount += ing.amount;
              }
            }
          } else {
            cart.push(ing);
          }
        }
      }
    }
    this.dataService.shoppingCartSubject.next(cart);
  }

  // Search for a duplicate Ingredient within cart observeable
  searchDuplicateCart(mIng: Ingridient) {
    const cart = this.dataService.shoppingCartSubject.value;
    for (const ingCart of cart) {
      if (ingCart.name === mIng.name) {
        console.log('Found dup', ingCart.name, mIng.name);
        return true;
      }
    }
  }
}
