import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {PersonServiceClient} from '../services/person.service.client';
let selfReference;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username;
  password;

  login = (username, password) => {

    this.personService.findPersonByLogin(username)
        .then(user => {
          if (user.login === username && user.password === password) {
            console.log(user);
            this.personService.current(username);
            selfReference.router.navigate(['profile']);
          } else {
            console.log(user);
            alert('Password or username is incorrect, please try again.');
          }
        });
    }


    // console.log([logn]);
    // this.personService.findPersonByLogin(logn)
    //   .then(function (user) {
    //     console.log(user);
    //     if (user.password === pswd) {
    //       console.log('yeah');
    //       selfReference.router.navigate(['profile']);
    //     }


        // if (user == null) {
        //   alert('Uth oh, it seems your username or password doesn\'t exist!' +
        //     ' Please, try again or sign up at the Register page');
        // } else if (user.password !== this.pswd) {
        //   alert('Woops... Your password does not match the given username. Try again!');
        // } else {
        //   // selfReference.personService.login(logn)
        //   //   .then(() => selfReference.router.navigate(['profile']));
        // }
  //     });
  //
  // }

  constructor(private router: Router, private personService: PersonServiceClient) {
    selfReference = this;

  }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

}
