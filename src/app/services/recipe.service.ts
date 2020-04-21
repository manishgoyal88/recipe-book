import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Test Recipe 1',
      'This is a Test Recipe 1',
      'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg',
      [
        new Ingredient('Tomato', 4),
        new Ingredient('Cucumber', 1),
        new Ingredient('Baby Corn', 1)
      ]
    ),
    new Recipe(
      1,
      'Test Recipe 2',
      'This is a Test Recipe 2',
      'https://cdn.pixabay.com/photo/2016/08/01/16/18/raspberries-1561457__480.jpg',
      [
        new Ingredient('Strawberries', 4),
        new Ingredient('Mint leaves', 4)
      ]
    )
  ];

  public getRecipes() {
    return this.recipes.slice();
  }

  public getRecipeById(id: number) {
    return this.recipes[id];
  }
}
