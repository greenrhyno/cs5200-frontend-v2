import { Component, OnInit } from '@angular/core';
import {ArticleServiceClient} from '../services/article.service.client';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  selfReference;
  constructor(private articleService: ArticleServiceClient) {
    this.selfReference = this;
  }

  ngOnInit() {
  }

}
