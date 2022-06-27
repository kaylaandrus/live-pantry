import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-pantry-edit',
  templateUrl: './pantry-edit.component.html',
  styleUrls: ['./pantry-edit.component.css'],
})
export class PantryEditComponent implements OnInit {
  pantryIngredients = [];
  constructor() {}
  ingredientName = '';
  ngOnInit(): void {}

  onAddToPantry(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.pantryIngredients.push(newIngredient);
    console.log(this.pantryIngredients);
  }

  onDeletePantryItem(id: number) {
    const index = id + 1;
    this.pantryIngredients.slice(index, 1);
  }
}
