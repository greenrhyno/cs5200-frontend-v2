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
  constructor(private articleService: ArticleServiceClient, private router: Router, private activatedRoute: ActivatedRoute) {
    selfReference = this;
  }

  ngOnInit() {
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
