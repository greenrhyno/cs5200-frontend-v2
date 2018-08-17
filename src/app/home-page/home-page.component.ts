import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../services/recipe.service.client';
let selfReference;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ingredients;
  user;
  recipeList = [];
  constructor(private recipeService: RecipeServiceClient) {
    selfReference = this;
  }

  navigateToRecipe(id) {
    this.recipeService.findRecipeById(id)
      .then(object => {
        window.location.href = object.sourceUrl;
      });
  }

  findRecipeByIngredients(ingredients) {
    console.log(ingredients);
    this.recipeService.findRecipeByIngredients(ingredients)
      .then(function (recipe) {
        console.log(recipe);
        selfReference.recipeList = recipe;
        });
  }

  ngOnInit() {
  }

}
