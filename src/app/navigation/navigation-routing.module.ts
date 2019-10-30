import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from '../pages/home/home-page/home-page.component';
import { LoginPagesComponent } from '../pages/login/login-page/login-pages.component';
import { NgModule } from '@angular/core';

const routes: Route[] = [
    { path: 'home', component: HomePageComponent, loadChildren: '../pages/home/home.module#HomeModule' },
    { path: 'login', component: LoginPagesComponent, loadChildren: '../pages/login/login.module#LoginModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class NavigationRoutingModule { }
