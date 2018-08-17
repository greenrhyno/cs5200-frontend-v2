import {Component, Input, OnInit} from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {Router} from '@angular/router';
let selfReference;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // @Input() username: String;

  username = '';
  password = '';
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  address = '';
  city = '';
  state = '';
  zip = '';
  constructor(private router: Router, private personService: PersonServiceClient) {
    selfReference = this;
  }
  ngOnInit() {
    this.personService
      .profile()
      .then(user => {
        console.log(user);
        if (user.status === 400) {
          alert('Uth oh, we seemed to have misplaced your credentials. Please, sign in again.');
          selfReference.router.navigate(['login']);
        } else {
          this.username = user.login;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.phoneNumber = user.phoneNumber;
          this.email = user.email;
          this.address = user.address;
          this.city = user.city;
          this.state = user.state;
          this.zip = user.zip;
        }
      });

  }
}
