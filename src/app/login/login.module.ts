import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { MaterialModule } from '../material/material.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';

import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: 'login', component: LoginPagesComponent}
];

@NgModule({
  declarations: [LoginPagesComponent, SignupFormComponent, SigninFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    LoginPagesComponent,
    SigninFormComponent,
    SignupFormComponent,
    RouterModule
  ]
})
export class LoginModule { }
