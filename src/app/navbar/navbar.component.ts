import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  type;
  constructor(private personService: PersonServiceClient) { }

  ngOnInit() {
    this.type = this.personService.personType;
  }

}
