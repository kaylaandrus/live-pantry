import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-my-pantry',
  templateUrl: './my-pantry.component.html',
  styleUrls: ['./my-pantry.component.css'],
})
export class MyPantryComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}
}
