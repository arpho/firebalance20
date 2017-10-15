import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CategoriesProvider {
  public categoriesRef: firebase.database.Reference
  public user: any
  constructor(public http: Http,

  ) {
    console.log('check user')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        console.log('got user',user)
        const uid = user.uid
        this.categoriesRef = firebase.database().ref(`/categorie/${uid}`);
        console.log('cateegoriesRef',this.categoriesRef);
      }
    })


  }

  getCategories(): firebase.database.Reference {
    //console.log('user in provider',this.user.uid)
    return this.categoriesRef
  }

  getCategory(categoryId: string) {
    return this.categoriesRef.child(categoryId)
  }

  pushNewCategory(category: string) {
    this.categoriesRef.push({ title: category })
  }
}
