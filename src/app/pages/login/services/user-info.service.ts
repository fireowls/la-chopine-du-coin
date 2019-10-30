import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userId: string;
  user: User;

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
    this.authService.userId.subscribe(id => {
      console.log('try to connect...');
      if (id !== null) {
        this.loadUser(id).then((value: boolean) => {
          console.log(this.user);
          if (!value) {
            this.createUser(this.authService.user);
          }
        });
      }
    });
  }

  private loadUser(id: string): Promise<boolean> {
    this.userId = id;
    return new Promise((resolve) => {
      this.firestore.collection('users', ref => ref.where('id', '==', id)).snapshotChanges().pipe(
        map(snaps => snaps.map(snap => {
          return {
            ...snap.payload.doc.data()
          } as User;
        }))
      ).subscribe(users => {
        if (users.length > 0) {
          this.user = users[0];
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  private createUser(user: User) {
    console.log(this.userId);
    this.user = {
      id: this.userId,
      ...user
    };
    console.warn(this.user);
    this.firestore.collection('/users').doc(this.userId).set(this.user).catch(err => console.error(err));
  }

}
