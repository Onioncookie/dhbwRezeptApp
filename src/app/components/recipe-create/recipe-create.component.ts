import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import {Recipe} from '../../../model/recipe';
import {FormControl, FormGroup} from '@angular/forms';
import {IngridientListData} from '../../../model/ingridientListData';
import {Ingridient} from '../../../model/ingridient';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  // Save currently clicked Category and chosen unit
  clickedIngredient;
  /// Predefined units, will be applied to the newly added ingredient
  allUnits = [
    'mL',
    'Gramm',
    'Kilogramm',
    'Pieces',
    'Litre',
  ];
  // Create predefined Ingredients
  ingredientList = new IngridientListData();
  // Local temp List for new Ingredient for the new recipe
  listIngredientsToAdd: Ingridient[] = [];

  // Formgroup for userinput, used to grab the new Recipe details
  entireForm = new FormGroup({
    nameForm: new FormControl(''),
    pictureForm: new FormControl(''),
    descriptionForm: new FormControl('')
  });

  // html control variables
  amountForm;
  currentIngredientSelected;
  ingredientSelected = false;

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit() {
  }

  createRecipe() {
    const recipe = new Recipe(this.entireForm.controls.nameForm.value, this.entireForm.controls.pictureForm.value,
      this.entireForm.controls.descriptionForm.value);
    // Add recipe to dataservice
    this.dataService.addRecipe(recipe);
    // Add Ingredients from local array to the new recipe that was just created in the dataservice
    for (const ing of this.listIngredientsToAdd) {
      this.dataService.addIngridientToRecipe(recipe.name, ing, ing.amount);
    }
  }

  addIngredientLocalArray(ing: Ingridient, mAmount) {
    ing.amount = mAmount;
    this.listIngredientsToAdd.push(ing);
  }
}
