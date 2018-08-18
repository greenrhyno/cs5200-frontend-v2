import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {Router} from '@angular/router';
let selfReference;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  confirmPassword;
  typeOfUser;

  constructor(private router: Router, private personService: PersonServiceClient) {
    selfReference = this;
  }
  register(username, password, confirmPassword) {
    if (username === null || password == null || confirmPassword == null || this.typeOfUser == null) {
      alert('Sorry, you may have missed one or two fields. Make sure everything is complete before registering.');
    } else {
      this.personService.findPersonByLogin(username)
        .then(response => {
            if (response !== null) {
              alert('Sorry, that user name is already taken.');
            } else {
              if (password !== confirmPassword) {
                alert('Passwords do not match, please try again.');
              } else {
                this.personService.createPerson(username, password, this.typeOfUser)
                  .then(r => {
                    console.log(r)
                    this.personService.current(username);
                    this.personService.currentType(this.typeOfUser);
                    selfReference.router.navigate(['profile']);
                  });
              }
            }
          }
        );
    }
  }
  ngOnInit() {
  }

}
