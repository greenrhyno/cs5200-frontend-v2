import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
import {Router} from '@angular/router';
let selfReference;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private personService: PersonServiceClient, private router: Router) {
    selfReference = this;
  }

  ngOnInit() {
    if (this.personService.username === '') {
      alert('Uth oh, we seemed to have misplaced your credentials. Please, sign in again.');
      selfReference.router.navigate(['login']);
    }
  }

}
