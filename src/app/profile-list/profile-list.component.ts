import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {ActivatedRoute, Router} from '@angular/router';
let selfReference;

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profileList = [];
  constructor(private personService: PersonServiceClient, private router: Router, private activatedRoute: ActivatedRoute) {
    selfReference = this;
  }

  ngOnInit() {
    this.personService.findAllPerson()
      .then(response => {
        this.profileList = response;
        console.log(response);
      });
  }

  sendToProfile(username) {

    console.log(username);
    selfReference.router.navigate(['publicProfile/:' + username]);
    // this.personService.findPersonByLogin(username)
    //   .then(response => {
    //     console.log(response);
    //       this.personService.setSearchPerson(response.id);
    //       selfReference.router.navigate(['publicProfile/:' + response.username]);
    //     }
    //   );

  }

}
