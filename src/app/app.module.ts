import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPantryComponent } from './my-pantry/my-pantry.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPantryComponent,
    MyRecipesComponent,
    ShoppingListComponent,
    MenuComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
