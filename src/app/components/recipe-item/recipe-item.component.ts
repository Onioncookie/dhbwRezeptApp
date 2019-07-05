import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  ngOnInit() {
  }

}
