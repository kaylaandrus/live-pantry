import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css'],
})
export class RecipeEditorComponent implements OnInit {
  openForm = false;
  constructor() {}

  onClickOpenForm() {
    this.openForm = !this.openForm;
    return this.openForm;
  }

  ngOnInit(): void {}
}
