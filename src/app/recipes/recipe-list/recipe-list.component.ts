import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel('Test Recipe', 'This is a test recipe', 'https://joyfoodsunshine.com/wp-content/uploads/' +
      '2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'),
    new RecipeModel('Another Test Recipe', 'This is a test recipe', 'https://joyfoodsunshine.com/wp-content/uploads/' +
      '2016/09/easy-pizza-casserole-recipe-4-500x500.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }
}
