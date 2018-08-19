import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
let selfReference;

@Component({
  selector: 'app-admin-mgmt-page',
  templateUrl: './admin-mgmt-page.component.html',
  styleUrls: ['./admin-mgmt-page.component.css']
})
export class AdminMgmtPageComponent implements OnInit {

  searchName;
  personList = [];
  constructor(private personService: PersonServiceClient) {
    selfReference = this;
  }

  fetchByLogin(logn) {
    this.personService.findPersonByLogin(logn).then(people =>
      selfReference.personList = [people]);
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

  updatePerson(id, person) {
    selfReference.personService.updatePerson(id, person).then((newPerson) => {
      console.log(newPerson)
      alert('User has been successfuly updated.')
      selfReference.retrieveAllPeople();
    }
   );
  }

  ngOnInit() {

    if (this.personService.personType !== 'Admin') {
      alert('Uth oh, we seemed to have misplaced your credentials. Please, sign in again.');
      selfReference.router.navigate(['login']);
    }

    selfReference.retrieveAllPeople();
  }

}
