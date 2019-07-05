import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import {Recipe} from '../../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit() {
    this.dataService.recipeList.subscribe(value => {
      this.recipeList = value;
    });
  }

}
