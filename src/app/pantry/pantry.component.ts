import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
let selfReference;

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  personType;
  username;
  user;
  blogTitle;
  pictureUrl;
  textForPost;
  adTitle;
  adUrl;

  submitPost() {
    alert('A post to your adoring fans has been submitted!');
  }

  submitAd() {
    alert('You ad has been submitted!');
  }

  constructor(private personService: PersonServiceClient) {
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
      });

    // console.log(this.user);
    // console.log(selfReference.personService.username);
    // console.log(selfReference.personService.personType);
    // console.log('did it work?');
  }
}


