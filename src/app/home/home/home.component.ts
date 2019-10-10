import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = environment.appInfo.title;
  description: string = environment.appInfo.description;

  constructor() { }

  ngOnInit() {
  }

}
