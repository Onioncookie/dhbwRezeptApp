import { Injectable } from '@angular/core';
import {Recipe} from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  recipeList: Recipe[];
  ingridientCategoryList = [];

  constructor() { }
}
