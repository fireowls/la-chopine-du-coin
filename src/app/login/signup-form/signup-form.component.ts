import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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
    console.log(this.signupForm.value);
    this.authService.doSignupEmailPassword(this.email.value, this.password.value);
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
