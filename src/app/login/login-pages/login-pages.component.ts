import { Component, OnInit } from '@angular/core';
import { User, SexType } from '../user/user.model';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent implements OnInit {

  user = new User('test', 'michel', 'berger', new Date('2018-10-24T00:00:00'), SexType.CHOPIN);

  constructor() { }

  ngOnInit() {
  }

}
