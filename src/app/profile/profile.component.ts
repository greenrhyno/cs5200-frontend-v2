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
  bio;
  imageURL;

  updateUser() {
    this.user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      bio: this.bio,
      imageURL: this.imageURL
    };
    this.personService.updatePerson(this.id, this.user)
      .then(response => {
        console.log(response);
        alert('Profile updated.');
      });
    // if (this.type === 'User') {
    //    this.user = {
    //     username: this.username,
    //     password: this.password,
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     email: this.email
    //   };
    //   this.personService.updateUser(this.id, this.user)
    //     .then(response => {
    //       console.log(response);
    //       alert('Profile updated.');
    //     });
    // } else if (this.type === 'Admin') {
    //   this.user = {
    //     username: this.username,
    //     password: this.password,
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     email: this.email
    //   };
    //   this.personService.updateAdmin(this.id, this.user)
    //     .then(response => {
    //       console.log(response);
    //       alert('Profile updated.');
    //     });
    // } else if (this.type === 'CompanyRep') {
    //   this.user = {
    //     username: this.username,
    //     password: this.password,
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     email: this.email,
    //     name: this.companyName
    //   };
    //   this.personService.updateCompanyRep(this.id, this.user)
    //     .then(response => {
    //       console.log(response);
    //       alert('Profile updated.');
    //     });
    // } else {
    //     this.user = {
    //       username: this.username,
    //       password: this.password,
    //       firstName: this.firstName,
    //       lastName: this.lastName,
    //       email: this.email,
    //       specialty: this.specialty
    //     };
    //     this.personService.updateChef(this.id, this.user)
    //       .then(response => {
    //         console.log(response);
    //         alert('Profile updated.');
    //       });
    // }
  }

  navigateToPantry() {
    selfReference.router.navigate(['pantry']);
  }



  constructor(private router: Router, private personService: PersonServiceClient) {
    selfReference = this;
  }


  ngOnInit() {
    this.personService
      .profile()
      .then(user => {
        console.log(user);
        this.personService.currentId(user.id);
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
          this.bio = user.bio;
          this.imageURL = user.imageURL;
          if (this.type === 'Chef') {
            this.specialty = user.specialty;
          }
          if (this.type === 'Company Representative') {
            this.companyName = user.name;
          }
        }
      });

  }
}
