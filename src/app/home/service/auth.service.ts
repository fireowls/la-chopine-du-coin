import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(auth:AngularFireAuth) { }

  doRegister(user:User,password){
    return new Promise((resolve,reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email,password)
      .then(res => {
        this.sendUserData(user);
      },err => reject(err))
    })
  }

  doLogin(email: string, password: string){
    return new Promise((resolve,reject) => {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(res => {
        resolve(res);
      },err => reject(err))
    })
  }

  sendUserData(user: User){
    return new Promise((resolve,reject) => {
      firebase.firestore().collection('').add({
        
      });
    })
  }
}
