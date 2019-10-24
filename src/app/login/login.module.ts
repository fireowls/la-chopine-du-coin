import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { MaterialModule } from '../material/material.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';

import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FireModule } from '../fire/fire.module';

import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Route[] = [
  {
    path: 'login', component: LoginPagesComponent,
    children: [
      { path: 'signin', component: SigninFormComponent },
      { path: 'signup', component: SignupFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LoginPagesComponent,
    SignupFormComponent,
    SigninFormComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FireModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    LoginPagesComponent,
    SigninFormComponent,
    SignupFormComponent,
    RouterModule
  ],
  providers: [ AuthService ]
})
export class LoginModule { }
