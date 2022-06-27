import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Recipe } from '../my-recipes/recipe.model';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new Subject<Recipe>();
  recipeListChanged = new Subject<Recipe[]>();

  private myRecipeList: Recipe[] = [];

  saveToRecipeList(recipe: Recipe) {
    this.myRecipeList.push(recipe);
    this.selectedRecipe.next(recipe);
    this.recipeListChanged.next(this.myRecipeList.slice());
  }

  getRecipes() {
    return this.myRecipeList.slice();
  }

  getRecipe(idx: number) {
    return this.myRecipeList.slice()[idx];
  }

  updateRecipe(index: number, updatedRecipeDetails: Recipe) {
    this.myRecipeList[index] = updatedRecipeDetails;
    this.recipeListChanged.next(this.myRecipeList.slice());
  }

  setRecipes(recipeArr: Recipe[] = []) {
    this.myRecipeList = recipeArr;
    this.recipeListChanged.next(this.myRecipeList.slice());
  }

  deleteRecipeFromRecipeList(idx: number) {
    if (idx === -1) return;
    this.selectedRecipe.next(this.myRecipeList[idx]);
    this.myRecipeList.splice(idx, 1);
    this.recipeListChanged.next(this.myRecipeList.slice());
  }
}
