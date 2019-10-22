import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  changePseudo: boolean;
  passwordError: string;
  comfirmPasswordError: string;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.changePseudo = false;
    this.passwordError = null;
    this.comfirmPasswordError = null;
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
    console.log(this.signupForm.value);
    this.authService.doSignupEmailPassword(this.email.value, this.password.value);
  }

  onKey(event): void {
    if (!this.changePseudo) {
      this.signupForm.get('pseudo').setValue(
        (this.firstName.value !== '' ? this.firstName.value : '') +
        (((this.firstName.value !== '' && this.lastName.value !== '') ? ' ' : '')) +
        (this.lastName.value !== '' ? this.lastName.value : '')
      );
    }
  }

  checkPassword() {
    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(this.password.value)) {
      this.passwordError = 'Le mot de passe doit contenir au moins une lettre minuscule, ' +
      'une lettre majuscule, un chiffre et un charactère special !';
    } else {
      this.passwordError = null;
    }
  }

  checkComfirmPassword() {
    if (this.password.value !== this.comfirmPassword.value) {
      this.comfirmPasswordError = 'Les mots de passe ne sont pas identique !';
    } else {
      this.comfirmPasswordError = null;
    }
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
