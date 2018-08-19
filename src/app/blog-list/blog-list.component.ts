import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleServiceClient} from '../services/article.service.client';
let selfReference

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogList = [];
  constructor(private personService: PersonServiceClient,
              private articleService: ArticleServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    selfReference = this;
  }

  ngOnInit() {
    if (this.personService.username === '') {
      alert('Uth oh, we seemed to have misplaced your credentials. Please, sign in again.');
      selfReference.router.navigate(['login']);
    }
    this.articleService.findAllArticle()
      .then(response => {
        this.blogList = response;
        console.log(response);
      });
  }

  sendToBlog(username) {

    console.log(username);
    selfReference.router.navigate(['blog/:' + username]);

  }

}
