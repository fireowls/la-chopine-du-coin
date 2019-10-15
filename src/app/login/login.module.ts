import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { MaterialModule } from '../material/material.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';

import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';
import { FireModule } from '../fire/fire.module';

import { AuthService } from './auth.service';

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
  declarations: [LoginPagesComponent, SignupFormComponent, SigninFormComponent, FormErrorComponent],
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
