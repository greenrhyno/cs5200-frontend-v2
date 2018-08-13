import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {PersonServiceClient} from '../services/person.service.client';
let selfReference


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logn;
  pswd;

  login(logn) {
    console.log([logn]);
    this.personService.findPersonByLogin(logn)
      .then(function (user) {
        if (user == null) {
          alert('Uth oh, it seems your username or password doesn\'t exist!' +
            ' Please, try again or sign up at the Register page');
        } else if (user.password !== this.pswd) {
          alert('Woops... Your password does not match the given username. Try again!');
        } else {
          // selfReference.personService.login(logn)
          //   .then(() => selfReference.router.navigate(['profile']));
        }
      });

  }

  constructor(private router: Router, private personService: PersonServiceClient) {
    selfReference = this;

  }

  ngOnInit() {
  }

}
