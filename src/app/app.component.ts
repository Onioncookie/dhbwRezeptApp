import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {DataServiceService} from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, private dataService: DataServiceService) {
    iconRegistry.addSvgIcon(
      'shoppingCart', domSanitizer.bypassSecurityTrustResourceUrl('../assets/baseline-shopping_cart-24px.svg'));
    iconRegistry.addSvgIcon(
      'recipeMenu', domSanitizer.bypassSecurityTrustResourceUrl('../assets/baseline-restaurant_menu-24px.svg'));
    iconRegistry.addSvgIcon(
      'blender', domSanitizer.bypassSecurityTrustResourceUrl('../assets/blender.svg'));
  }
  title = 'dhbwRezeptApp';
}
