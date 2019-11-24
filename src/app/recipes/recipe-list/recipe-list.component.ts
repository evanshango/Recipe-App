import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Test Recipe', 'This is a test recipe', 'https://joyfoodsunshine.com/wp-content/uploads/' +
      '2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'),
    new RecipeModel('Test Recipe', 'This is a test recipe', 'https://joyfoodsunshine.com/wp-content/uploads/' +
      '2016/09/easy-pizza-casserole-recipe-4-500x500.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
