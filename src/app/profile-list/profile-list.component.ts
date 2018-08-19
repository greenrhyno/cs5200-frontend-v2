import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleServiceClient} from '../services/article.service.client';
let selfReference;

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profileList = [];
  adList = [];
  currentAd = { imageUrl: 'https://3.bp.blogspot.com/-Kajk84WUf4s/V-l247dNznI/AAAAAAACYqw/ZGf9GhRYtIIgL1RMzFRdIM1syzgYKQAGQCLcB/s1600/' +
      'creepy-kids-in-creepy-vintage-ads-7.jpg'};
  numAds;
  adIndex;
  constructor(private personService: PersonServiceClient, private articleService: ArticleServiceClient,
              private router: Router, private activatedRoute: ActivatedRoute) {
    selfReference = this;
  }

  ngOnInit() {
    this.personService.findAllPerson()
      .then(response => {
        this.profileList = response;
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

  sendToProfile(username) {

    console.log(username);
    selfReference.router.navigate(['publicProfile/:' + username]);
    // this.personService.findPersonByLogin(username)
    //   .then(response => {
    //     console.log(response);
    //       this.personService.setSearchPerson(response.id);
    //       selfReference.router.navigate(['publicProfile/:' + response.username]);
    //     }
    //   );

  }

}
