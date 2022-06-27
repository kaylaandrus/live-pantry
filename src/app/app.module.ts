import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPantryComponent } from './my-pantry/my-pantry.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { RecipeEditorComponent } from './my-recipes/recipe-editor/recipe-editor.component';
import { FormsModule } from '@angular/forms';
import { RecipeListComponent } from './my-recipes/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './my-recipes/recipe-list/recipe-item/recipe-item.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { PantryEditComponent } from './my-pantry/pantry-edit/pantry-edit.component';
import { RecipeComponent } from './shared/recipe/recipe.component';
import { AuthComponent } from './auth/auth.component';
FullCalendarModule.registerPlugins([dayGridPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    MyPantryComponent,
    MyRecipesComponent,
    ShoppingListComponent,
    MenuComponent,
    NavbarComponent,
    RecipeEditorComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    MenuEditComponent,
    PantryEditComponent,
    RecipeComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
