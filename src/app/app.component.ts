import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'shoppingCart', domSanitizer.bypassSecurityTrustResourceUrl('../assets/baseline-shopping_cart-24px.svg'));
    iconRegistry.addSvgIcon(
      'shoppingCart', domSanitizer.bypassSecurityTrustResourceUrl('../assets/baseline-shopping_cart-24px.svg'));
  }
  title = 'dhbwRezeptApp';
}
