import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MyPantryComponent } from './my-pantry/my-pantry.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-pantry', pathMatch: 'full' },
  { path: 'my-pantry', component: MyPantryComponent },
  { path: 'my-recipes', component: MyRecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
