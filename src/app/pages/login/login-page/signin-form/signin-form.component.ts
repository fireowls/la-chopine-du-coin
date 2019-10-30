import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  signinForm: FormGroup;
  error: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private userInfo: UserInfoService) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  submit(): void {
    console.log('submit');
    this.authService.signinEmailPassword(this.email.value, this.password.value)
      .catch(err => this.error = err.message);
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

}
