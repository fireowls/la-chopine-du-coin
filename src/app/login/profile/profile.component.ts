import { Component, OnInit, Input } from '@angular/core';
import { User, SexType } from '../user/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = new User('toto', 'Maxou', 'bg', new Date('1982-06-06T00:00:00'), SexType.CHOPIN);

  constructor() { }

  ngOnInit() {
  }

}
