import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ HomeComponent, RegisterComponent ],
  imports: [ CommonModule, MaterialModule ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
