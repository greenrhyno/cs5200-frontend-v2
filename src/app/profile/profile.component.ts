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

  id;
  username = '';
  password = '';
  firstName = '';
  lastName = '';
  email = '';
  type = '';
  specialty = '';
  companyName = '';
  user;


  updateUser() {
    console.log(this.type);
    if (this.type === 'Chef') {
      console.log('inside Chef');
      this.user = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        type: this.type,
        specialty: this.specialty,
      };
    } else if (this.type === 'CompanyRep') {
      console.log('inside company');
      this.user = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        type: this.type,
        name: this.companyName
      };
    } else {
      console.log('inside user');
      this.user = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        type: this.type,
      };
    }
    this.personService.updatePerson(this.id, this.user)
      .then(response => {
        console.log(response);
        alert('Profile updated.');
      });
  }

  navigateToPantry() {
    selfReference.router.navigate(['pantry']);
  }

  navigateToAdmin() {
    selfReference.router.navigate(['admin-mgmt']);
  }


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
          this.id = user.id;
          this.username = user.login;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
          this.type = user.type;
          this.specialty = user.specialty;
          this.companyName = user.name;
        }
      });

  }
}
