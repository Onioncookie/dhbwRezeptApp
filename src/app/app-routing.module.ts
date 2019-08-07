import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './components/recipe-item/recipe-item.component';
import {RecipeCreateComponent} from './components/recipe-create/recipe-create.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'RecipeItem', component: RecipeItemComponent},
  {path: 'AddRecipe', component: RecipeCreateComponent},
  {path: 'ShoppingCart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
