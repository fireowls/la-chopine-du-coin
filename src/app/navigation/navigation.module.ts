import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

import { HomeComponent } from '../home/home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MaterialModule } from '../material/material.module';
import { LoginModule } from '../login/login.module';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    HomeModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [ RouterModule, NavBarComponent ]
})
export class NavigationModule { }
