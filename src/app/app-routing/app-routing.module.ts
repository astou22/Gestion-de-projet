import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'C:/projet/angular/tp4/src/app/components/home/home.component';
import { NotFoundComponent } from 'C:/projet/angular/tp4/src/app/components/not-found/not-found.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { UsersComponent } from '../components/users/users.component';
import { PostsComponent } from 'C:/projet/angular/tp4/src/app/components/posts/posts.component';
import { LoginComponent } from '../components/login/login.component';
import {AuthGuard} from 'C:/projet/angular/tp4/src/app/services/auth-guard.service';
import { PreventUnsavedChangesGuard } from 'C:/projet/angular/tp4/src/app/services/prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
  { path: '', component: LoginComponent,canDeactivate:[PreventUnsavedChangesGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'categories', component:CategoriesComponent},
  { path: 'users', component:UsersComponent},
  {path:'posts',component:PostsComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'settings', component:SettingsComponent},
  { path: 'home/posts', component: PostsComponent,canActivate:[AuthGuard]},
  { path: '**', component: NotFoundComponent },
]);