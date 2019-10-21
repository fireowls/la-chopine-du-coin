import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ HomeComponent, RegisterComponent, HomeWelcomeComponent, LoginComponent],
  imports: [ CommonModule, MaterialModule ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
