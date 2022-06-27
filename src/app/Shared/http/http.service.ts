import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  firebaseRootURL = '';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  saveBooksToFirebase() {
    const books = this.recipeService.getRecipes();

    this.http
      .put(this.firebaseRootURL, books)
      .subscribe((recipesFromFirebase: Recipe[]) => {
        console.log('Firebase DB Response:', recipesFromFirebase);
      });
  }

  fetchRecipesFromFirebase() {
    return this.http.get(this.firebaseRootURL, {}).pipe(
      tap((recipes: Recipe[]) => {
        this.recipeService.setRecipes();
      })
    );
  }
}
// recipes in setRecipes(recipes)??? ^^^
