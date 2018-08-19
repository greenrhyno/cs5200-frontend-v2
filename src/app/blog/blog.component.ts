import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {Router} from '@angular/router';
import {ArticleServiceClient} from '../services/article.service.client';
let selfReference;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogId;
  personId;
  person = null;
  blog;

  constructor(private personService: PersonServiceClient, private articleService: ArticleServiceClient,
              private router: Router) {
    selfReference = this;
  }

  like() {
    if (this.person === null) {
      alert('Please register to like blogs.');
    } else {
      this.articleService.addLikeToArticle(this.person.id, this.blogId).then(r =>
      console.log(r));
    }
  }

  unlike() {
    if (this.person === null) {
      alert('Please register to UNlike blogs.');
    } else {
      this.articleService.deleteLikeToArticle(this.person.id, this.blogId).then(() =>
        console.log('deleted like'));
    }
  }

  ngOnInit() {
    if (this.personService.username !== '') {
      this.personService.findPersonByLogin(this.personService.username).then( p =>
      this.person = p);
      // this.personId = this.person;
    }
    this.blogId = this.router.url.split(':')[1];
    this.articleService.findBlogById(this.blogId).then( blog => {
      this.blog = blog;
      this.blogId = blog.id;
      console.log('Blog Found');
      console.log(this.blog);
    });
  }

}
