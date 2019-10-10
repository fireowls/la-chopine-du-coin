import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `<app-nav-bar></app-nav-bar>
  <div class="main-container">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }
