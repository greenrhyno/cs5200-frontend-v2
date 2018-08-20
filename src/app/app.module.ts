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
import {ArticleServiceClient} from './services/article.service.client';
import {AdminServiceClient} from './services/admin.service.client';
import {ChefServiceClient} from './services/chef.service.client';
import {UserServiceClient} from './services/user.service.client';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { AdminMgmtArticleComponent } from './admin-mgmt-article/admin-mgmt-article.component';


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
    RegisterComponent,
    PublicProfileComponent,
    ProfileListComponent,
    BlogListComponent,
    BlogComponent,
    AdminMgmtArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [PersonServiceClient, RecipeServiceClient, ArticleServiceClient, AdminServiceClient, ChefServiceClient, UserServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
