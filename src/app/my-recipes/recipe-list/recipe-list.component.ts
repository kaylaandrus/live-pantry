import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Poppyseed Chicken',
      'Test description',
      '',
      'https://www.kindpng.com/picc/m/235-2356386_cooking-icon-png-recipe-icon-free-vector-transparent.png'
    ),
    new Recipe(
      'Crunchy Ramen Salad',
      'Test Description',
      '',
      'https://www.kindpng.com/picc/m/235-2356386_cooking-icon-png-recipe-icon-free-vector-transparent.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
