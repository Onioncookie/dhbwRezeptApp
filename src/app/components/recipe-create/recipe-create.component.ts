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
  allCategories = this.dataService.categoryList;
  clickedCategory;
  allUnits = [
    'mL',
    'Gramm',
    'Kilogramm',
    'Pieces',
    'Litre',
  ];
  clickedUnit: string;
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
