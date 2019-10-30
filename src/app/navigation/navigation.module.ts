import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [ NavBarComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesModule,
    RouterModule,
    NavigationRoutingModule
  ],
  exports: [NavBarComponent, NavigationRoutingModule ]
})
export class NavigationModule { }
