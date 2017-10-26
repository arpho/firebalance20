import { UserModel } from '../../pages/profile/profile.model';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  currentUser: UserModel;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    this.user = firebaseAuth.authState;
  }

  setCurrentUser(user: UserModel) {
    this.currentUser = user;
  }
  getCurrentUser(){
    return this.currentUser;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password).then(newUser => {
        firebase.database().ref(`/userProfile/${newUser.uid}/email`).set(email);
      })

      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    return this.firebaseAuth
      .auth
      .signOut();
  }

}