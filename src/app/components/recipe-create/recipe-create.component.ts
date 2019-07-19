import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import {Recipe} from '../../../model/recipe';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  // Get All Categories from Dataservice
  allCategories = this.dataService.categoryList;
  // Save currently clicked Category and choosen unit
  clickedCategory;
  clickedUnit: string;
  /// Predefined units, will be applied to the newly added ingredient
  allUnits = [
    'mL',
    'Gramm',
    'Kilogramm',
    'Pieces',
    'Litre',
  ];
  // Formgroup for userinput, used to grab the new Recipe details
  entireForm = new FormGroup({
    nameForm: new FormControl(''),
    pictureForm: new FormControl(''),
    descriptionForm: new FormControl('')
  });

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  createRecipe() {
    this.dataService.addRecipe(new Recipe(this.entireForm.controls.nameForm.value, this.entireForm.controls.pictureForm.value,
      this.entireForm.controls.descriptionForm.value));
  }
}
