import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../services/recipe.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ingredients;
  user;
  constructor(private recipeService: RecipeServiceClient) { }

  findRecipeByIngredients(ingredients) {
    console.log(ingredients);
    this.recipeService.findRecipeByIngredients(ingredients)
      .then(function (recipe) {
        console.log(recipe);
        });
  }

  ngOnInit() {
  }

}
