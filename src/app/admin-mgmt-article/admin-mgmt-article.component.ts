import { Component, OnInit } from '@angular/core';
import {ArticleServiceClient} from '../services/article.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-mgmt-article',
  templateUrl: './admin-mgmt-article.component.html',
  styleUrls: ['./admin-mgmt-article.component.css']
})
export class AdminMgmtArticleComponent implements OnInit {

  articleList = [];
  searchName;

  constructor( private articleService: ArticleServiceClient, private router: Router) {}

  fetchByLogin() {
    this.articleService.findArticleByLogin(this.searchName).then( articles =>
    this.articleList = articles);
  }

  goToUserMgmt() {
    this.router.navigate(['admin-mgmt']);
  }

  deleteArticle(id) {
    this.articleService.deleteArticleById(id).then( () =>
    this.articleService.findAllArticle().then( ar =>
      this.articleList = ar));
  }

  // updateArticle(id, article) {
  //   this.articleService.s
  // }

  ngOnInit() {
    this.articleService.findAllArticle().then( a =>
    this.articleList = a);
  }

}
