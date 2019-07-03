import {Recipe} from './recipe';
import {Ingridient} from './ingridient';


export class RecipeListData {
  noodleSalad = new Recipe('Noodle Salad', 'testUrl', 'This is a Test Recipe');
  pizza = new Recipe('Pizza', 'pizzaUrl', 'This is a Test Recipe for Pizza');



  recipeList = [
    this.noodleSalad,
    this.pizza,
  ];
}
