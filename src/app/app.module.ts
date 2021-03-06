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
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDividerModule, MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {DataServiceService} from './data-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddRecipeTESTNOTINCLUDEDComponent } from './components/Backlog, might add if bored/add-recipe-testnotincluded/add-recipe-testnotincluded.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingCartComponent,
    RecipeCreateComponent,
    IngredientCreateComponent,
    AddRecipeTESTNOTINCLUDEDComponent,
    IngredientListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
