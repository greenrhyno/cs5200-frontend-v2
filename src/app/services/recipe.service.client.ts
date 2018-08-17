import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/recipe/'

@Injectable()
export class RecipeServiceClient {


  findRecipeById(id) {
    return fetch( pApiUrl + id)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findRecipeByIngredients(ingredients) {
    return fetch( pApiUrl + 'ingredients/' + ingredients)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findRecipeByUserId(userId) {
    return fetch( pApiUrl + 'user/' + userId)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }



}
