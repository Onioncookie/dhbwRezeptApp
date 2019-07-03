import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RecipeCreateComponent } from './components/recipe-create/recipe-create.component';
import { IngredientCreateComponent } from './components/ingredient-create/ingredient-create.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {DataServiceService} from './data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingCartComponent,
    RecipeCreateComponent,
    IngredientCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
