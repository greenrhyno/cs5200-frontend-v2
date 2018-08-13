import { Routes, RouterModule } from '@angular/router';
// import {LoginComponent} from "./login/login.component";
// import {RegisterComponent} from "./register/register.component";
// import {ProfileComponent} from "./profile/profile.component";
import {HomePageComponent} from './home-page/home-page.component';
// import {PantryComponent} from "./pantry/pantry.component";

const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'pantry', component: PantryComponent,
  { path: 'home', component: HomePageComponent}

];

export const routing = RouterModule.forRoot(appRoutes);