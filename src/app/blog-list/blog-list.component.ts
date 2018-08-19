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
  currentAd;
  adList = [];
  numAds;
  adIndex;

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
    this.articleService.findAllBlog()
      .then(response => {
        this.blogList = response;
        console.log(response);
      }).then(() =>
      this.articleService.findAllAdvertisements().then( ads => {
          this.adList = ads;
          console.log('ALL ADS:');
          console.log(this.adList);
          this.numAds = this.adList.length;
          this.adIndex = Math.floor(Math.random() * this.numAds);
          this.currentAd = this.adList[this.adIndex];
          console.log('Chosen ad: ');
          console.log(this.currentAd);
        }));
  }

  sendToBlog(id) {

    console.log('Go to blog #' + id);
    selfReference.router.navigate(['blog/:' + id]);

  }

}
