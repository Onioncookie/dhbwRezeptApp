import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataServiceService} from '../../data-service.service';
import {Ingridient} from '../../../model/ingridient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  dataService = new DataServiceService();
  clickedCategory: any;
  categorySelected: boolean;
  allCategories: any = this.dataService.categoryList;
  clickedUnit: any;
  allUnits = [
    'mL',
    'Gramm',
    'Kilogramm',
    'Pieces',
    'Litre',
  ];
  unitSelected: boolean;


  // Formgroup for userinput, used to grab the new Recipe details
  entireForm = new FormGroup({
    nameForm: new FormControl(''),
    amountForm: new FormControl('')
  });
  addCartForm = new FormGroup({
    amountCartForm: new FormControl('')
  });

  constructor(dataService: DataServiceService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ing = new Ingridient(this.entireForm.controls.nameForm.value, this.clickedCategory, this.clickedUnit);
    this.dataService.addIngridientToRecipe('All Ingredients', ing, 0);
    console.log('Added ', ing);
    console.log(this.dataService.printRecipeList());
  }

  addToCard(mIng: any) {
    this.dataService.addIngredientToCart(mIng);
  }
}
