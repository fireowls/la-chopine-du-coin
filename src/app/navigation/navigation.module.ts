import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

import { HomeComponent } from '../home/home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    HomeModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule, NavBarComponent ]
})
export class NavigationModule { }
