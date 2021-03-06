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
import {AdminMgmtArticleComponent} from './admin-mgmt-article/admin-mgmt-article.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'pantry', component: PantryComponent},
  { path: 'blog/:id', component: BlogComponent},
  { path: 'blog-list', component: BlogListComponent},
  { path: 'publicProfile/:username', component: PublicProfileComponent},
  { path: 'profileList', component: ProfileListComponent},
  { path: 'admin-mgmt', component: AdminMgmtPageComponent},
  { path: 'admin-mgmt-article', component: AdminMgmtArticleComponent},
  { path: 'blog-list', component: BlogListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: '**', component: HomePageComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
