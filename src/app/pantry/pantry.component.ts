import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {ArticleServiceClient} from '../services/article.service.client';
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

  submitPost() {
    alert('A post to your adoring fans has been submitted!');
  }

  submitAd() {
    alert('Your ad has been submitted!');
  }

  constructor(private personService: PersonServiceClient, private articleService: ArticleServiceClient) {
    selfReference = this;
  }

  ngOnInit() {
    this.username = selfReference.personService.username;

    this.personService.findPersonByLogin(this.username)
      .then(response => {

        console.log(response);
        console.log(response.type);
        this.personType = response.type;
        console.log(this.personType);
        this.person = response;
        this.personId = response.id;
      });

   this.articleService.findLikedArticlesByPerson(this.personId)
     .then(response => this.contentLiked = response);

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


