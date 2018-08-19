import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '../services/person.service.client';
let selfReference

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private personService: PersonServiceClient) { }

  ngOnInit() {
    if (this.personService.username === '') {
      alert('Uth oh, we seemed to have misplaced your credentials. Please, sign in again.');
      selfReference.router.navigate(['login']);
    }
  }

}
