import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  person;
  personId;

  constructor(private personService: PersonServiceClient,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    // selfReference = this;
    // this.activatedRoute.queryParams.subscribe(params => {
    //  const personId = params['personId'];
    //   console.log(personId); // Print the parameter to the console.
    // });
  }

  follow() {
    console.log(this.personService.id);
    this.personService.followUser(this.personService.id, this.person.id);
      // .then(r => {
      //   console.log(r);
      // });
  }

  unfollow() {
    console.log(this.personService.id);
    this.personService.unfollowUser(this.personService.id, this.person.id);
      // .then(r => console.log(r));
  }

  ngOnInit() {
    this.personId = this.route.url.split(':')[1];

    this.personService.findPersonById(this.personId)
      .then(response => {
        console.log(response);
          this.person = response;
        }
      );
  }

}
