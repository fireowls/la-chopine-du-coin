import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [ HomeComponent, HomeWelcomeComponent],
  imports: [ CommonModule, MaterialModule, LoginModule ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
