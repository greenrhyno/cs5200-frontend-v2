import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  confirmPassword;
  constructor(private personService: PersonServiceClient) {}
  register(username, password, confirmPassword) {
    if (password.toString() !== confirmPassword.toString()) {
      alert('Passwords do not match, please try again.');
    } else {
      this.personService.createPerson(username, password)
        .then(response => response.json);
    }
  }
  ngOnInit() {
  }

}
