import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {ArticleServiceClient} from '../services/article.service.client';
import {ChefServiceClient} from '../services/chef.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {RecipeServiceClient} from '../services/recipe.service.client';
let selfReference;

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  personType;
  personId;
  username;
  user;
  blogTitle;
  pictureUrl;
  textForPost;
  adTitle;
  adUrl;
  person;
  contentLiked;
  mainList = [];
  newFoodName;
  recipeList = [];

  submitPost() {
    alert('A post to your adoring fans has been submitted!');
  }

  submitAd() {
    alert('Your ad has been submitted!');
  }

  constructor(private personService: PersonServiceClient, private articleService: ArticleServiceClient,
              private chefService: ChefServiceClient, private userService: UserServiceClient, private recipeService: RecipeServiceClient) {
    selfReference = this;
  }

  createFoodItem(n) {
    this.userService.newFoodItem(this.personId, n).then(() =>
      this.personService.findFood(this.personId).then(r => this.mainList = r));
  }

  deleteFoodItem(id) {
    this.userService.deleteFood(id).then( () =>
      this.personService.findFood(this.personId).then(r => this.mainList = r));
  }

  generateRecipesFromPantry(id) {
    this.recipeService.findRecipeByUserId(id).then( recipes => this.recipeList = recipes);
  }
  navigateToRecipe(id) {
    this.recipeService.findRecipeById(id)
      .then(object => {
        window.location.href = object.sourceUrl;
      });
  }

  ngOnInit() {
    this.username = selfReference.personService.username;

    this.personService.findPersonByLogin(this.username)
      .then(response => {

        console.log(response);
        console.log(response.type);
        this.personType = response.type;
        // console.log(this.personType);
        this.person = response;
        this.personId = response.id;
      }).then(() => {
      console.log('type: ' + this.personType);
      this.articleService.findLikedArticlesByPerson(this.personId)
        .then(response => this.contentLiked = response)
        .then(() => console.log(this.contentLiked));

      if (this.personType === 'Chef') {
        this.chefService.findAllBlogsForChef(this.username).then( r => this.mainList = r);
      } else if (this.personType === 'User') {
        this.personService.findFood(this.personId).then( r => this.mainList = r);
      } else if (this.personType === 'Admin') {
        this.personService.findAdvertisements(this.personId).then( r => this.mainList = r);
      } else {
        this.mainList = [];
      }
      console.log('MAIN LIST:');
      console.log(this.mainList);
    });


    // console.log(this.user);
    // console.log(selfReference.personService.username);
    // console.log(selfReference.personService.personType);
    // console.log('did it work?');
  }
  //
  // createBlog(blog) {
  //   this.blogService.createBlog(blog)
  //     .then(blog =>
  //       console.log(blog))}
  //
}


