import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PantryComponent} from './pantry/pantry.component';
import {AdminMgmtPageComponent} from './admin-mgmt-page/admin-mgmt-page.component';
import {BlogsComponent} from './blogs/blogs.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'pantry', component: PantryComponent},
  { path: 'admin-mgmt', component: AdminMgmtPageComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  {path: '**', component: HomePageComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
