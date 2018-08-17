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
    this.personService.findPersonByLogin(username)
      .then( response => {
        if (response !== null) {
          alert('Sorry, that user name is already taken.');
        } else {
          if (password.toString() !== confirmPassword.toString()) {
            alert('Passwords do not match, please try again.');
          } else {
            this.personService.createPerson(username, password, this.typeOfUser)
              .then(r => r.json);
            this.personService.current(username);
            this.personService.currentType(this.typeOfUser);
            selfReference.router.navigate(['profile']);
        }
        } }
      ); }
  ngOnInit() {
  }

}
