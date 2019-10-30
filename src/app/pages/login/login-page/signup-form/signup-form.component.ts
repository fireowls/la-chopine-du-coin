import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  changePseudo: boolean;

  error: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private authInfo: UserInfoService) {
    this.changePseudo = false;
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      pseudo: ['', Validators.required],
      password: ['', Validators.required],
      comfirmPassword: ['', Validators.required],
      gender: ['']
    });
  }

  onSubmit(): void {
    const user: User = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      pseudo: this.pseudo.value,
      gender: this.gender.value
    };

    this.authService.signupEmailPassword(this.email.value, this.password.value, user).then(() => console.log(this.authInfo.userId))
      .catch(err => this.error = err.message);

  }


  get email() {
    return this.signupForm.get('email');
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get comfirmPassword() {
    return this.signupForm.get('comfirmPassword');
  }

  get gender() {
    return this.signupForm.get('gender');
  }

  get pseudo() {
    return this.signupForm.get('pseudo');
  }

}
