import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PantryComponent} from './pantry/pantry.component';
import {AdminMgmtPageComponent} from './admin-mgmt-page/admin-mgmt-page.component';
import {PublicProfileComponent} from './public-profile/public-profile.component';
import {ProfileListComponent} from './profile-list/profile-list.component';
import {BlogComponent} from './blog/blog.component';
import {BlogListComponent} from './blog-list/blog-list.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'pantry', component: PantryComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog-list', component: BlogListComponent},
  { path: 'publicProfile', component: PublicProfileComponent},
  { path: 'profileList', component: ProfileListComponent},
  { path: 'admin-mgmt', component: AdminMgmtPageComponent},
  { path: 'blog-list', component: BlogListComponent},
  { path: 'blog', component: BlogComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: '**', component: HomePageComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
