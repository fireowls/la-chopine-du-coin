import { NgModule } from '@angular/core';

import { LoginPagesComponent } from './login-page/login-pages.component';
import { SignupFormComponent } from './login-page/signup-form/signup-form.component';
import { SigninFormComponent } from './login-page/signin-form/signin-form.component';
import { ProfileComponent } from './profile/profile.component';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FireModule } from 'src/app/fire/fire.module';
import { AuthService } from './services/auth.service';
import { LoginRoutingModule } from './login-routing.module';
import { UserInfoService } from './services/user-info.service';

@NgModule({
  declarations: [
    LoginPagesComponent,
    SignupFormComponent,
    SigninFormComponent,
    ProfileComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FireModule
  ],
  exports: [
    LoginPagesComponent
  ],
  providers: [ AuthService, UserInfoService ]
})
export class LoginModule { }
