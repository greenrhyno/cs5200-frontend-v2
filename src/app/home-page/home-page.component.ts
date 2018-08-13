import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username;
  user;
  constructor(private personService: PersonServiceClient) { }

  login(userName) {
    console.log(userName);
    this.personService.findPersonByLogin(userName)
      .then(function (user) {
        console.log(user);
        });
  }

  ngOnInit() {
  }

}
