import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninFormComponent } from './login-page/signin-form/signin-form.component';
import { SignupFormComponent } from './login-page/signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Route[] = [
    { path: 'signin', component: SigninFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', redirectTo: 'login/signin', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class LoginRoutingModule { }
