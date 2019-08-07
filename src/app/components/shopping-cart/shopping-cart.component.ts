import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

}
