import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {ArticleServiceClient} from '../services/article.service.client';
import {ChefServiceClient} from '../services/chef.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {RecipeServiceClient} from '../services/recipe.service.client';
import {Router} from '@angular/router';
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
  newBlog;
  newAd;
  description;
  peopleFollow;

  submitPost() {
    alert('A post to your adoring fans has been submitted!');
  }

  submitAd() {
    alert('Your ad has been submitted!');
  }

  constructor(private personService: PersonServiceClient, private articleService: ArticleServiceClient,
              private chefService: ChefServiceClient, private userService: UserServiceClient,
              private router: Router,
              private recipeService: RecipeServiceClient) {
    selfReference = this;
  }

  createFoodItem(n) {
    this.userService.newFoodItem(this.personId, n).then(() =>
      this.personService.findFood(this.personId).then(r => this.mainList = r));
  }

  createBlogPost() {
    this.newBlog = {
      title: this.blogTitle,
      post: this.textForPost,
      imageUrl: this.pictureUrl
    };
    this.chefService.createNewBlog(this.personId, this.newBlog).then( () =>
      this.chefService.findAllBlogsForChef(this.username).then( r => this.mainList = r));
  }

  createAd() {
    this.newAd = {
      title: this.adTitle,
      imageUrl: this.pictureUrl,
      description: this.description
    };
    this.personService.createAd(this.personId, this.newAd).then( r =>
    this.personService.findAdvertisements(this.personId).then(resp =>
    this.mainList = resp));
  }

  deleteAd(id) {
    console.log('delete ad ID# ' + id);
    this.personService.deleteAd(id).then( () =>
    this.personService.findAdvertisements(this.personId).then( r =>
    this.mainList = r));
  }


  deleteBlogPost(id) {
    console.log('delete blog post ID# ' + id);
    this.chefService.deleteBlogById(id).then(() =>
      this.chefService.findAllBlogsForChef(this.username).then(r => this.mainList = r));
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

  navigateToBlog(id) {
    this.router.navigate(['blog/:' + id]);
  }

  navigateToPerson(username) {
    this.router.navigate(['publicProfile/:' + username]);
  }

  ngOnInit() {
    if (this.personService.username === '' ) {
      alert('Uth oh, we seemed to have misplaced your credentials. Please, sign in again.');
      selfReference.router.navigate(['login']);
    }

    if (this.personService.username === 'Admin' ) {
      alert('Uth oh, we seemed to have misplaced your credentials. Please, sign in again.');
      selfReference.router.navigate(['profile']);
    }

    this.personService.getPeopleFollowed(this.personId)
      .then(response => {
          this.peopleFollow = response;
          console.log('THIS IS PRINTING, I HOPE!');
          console.log(response);
      }
        );
    console.log(this.peopleFollow);
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
      } else if (this.personType === 'CompanyRep') {
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


