import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss']
})
export class HomeWelcomeComponent implements OnInit {

  title: string = environment.appInfo.title;
  description: string = environment.appInfo.description;

  constructor() { }

  ngOnInit() {
  }

}
