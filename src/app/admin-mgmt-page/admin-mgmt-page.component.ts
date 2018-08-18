import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
let selfReference;

@Component({
  selector: 'app-admin-mgmt-page',
  templateUrl: './admin-mgmt-page.component.html',
  styleUrls: ['./admin-mgmt-page.component.css']
})
export class AdminMgmtPageComponent implements OnInit {

  personList = [];
  constructor(private personService: PersonServiceClient) {
    selfReference = this;
  }

  retrieveAllPeople() {
    this.personService.findAllPerson().then(people =>
    selfReference.personList = people);
  }

  deletePerson(id) {
    selfReference.personService.deletePersonById(id).then( () =>
      selfReference.retrieveAllPeople()
    );
  }

  updatePersonPopUp(id) {

  }
  ngOnInit() {
    selfReference.retrieveAllPeople();
  }

}
