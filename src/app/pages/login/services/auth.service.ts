import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: Observable<string>;
  user: User;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userId = this.angularFireAuth.authState.pipe(
      map((state: firebase.User) => state ? state.uid : null)
    );
  }


  signupEmailPassword(email: string, password: string, user: User): Promise<void> {
    this.user = user;
    return new Promise<void>((resolve, reject) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }

  signinEmailPassword(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.userId = null;
    this.user = null;
  }

}
