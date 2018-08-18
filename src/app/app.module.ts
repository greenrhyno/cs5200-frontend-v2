import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {PersonServiceClient} from './services/person.service.client';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PantryComponent } from './pantry/pantry.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RegisterComponent } from './register/register.component';
import {routing} from './app.routing';
import {RecipeServiceClient} from './services/recipe.service.client';
import { AdminMgmtPageComponent } from './admin-mgmt-page/admin-mgmt-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    NavbarComponent,
    PantryComponent,
    ProfileComponent,
    RecipeComponent,
    RegisterComponent,
    AdminMgmtPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [PersonServiceClient, RecipeServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
