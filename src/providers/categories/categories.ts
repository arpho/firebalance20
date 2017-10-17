import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CategoriesProvider {
  public categoriesRef: firebase.database.Reference
  public user: any;
  subjectCategoriesRef = new BehaviorSubject(null) // instanzio il behaviorSubject, è definito subito
  constructor(public http: Http,
   
  ) {
     
    console.log('check user')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('got user', user)
        const uid = user.uid
        this.categoriesRef = firebase.database().ref(`/categorie/${uid}`);
        this.subjectCategoriesRef.next(this.categoriesRef); // inserisco il riferimento
        //this.subjectCategoriesRef = new BehaviorSubject(this.categoriesRef)
        console.log('cateegoriesRef', this.categoriesRef);
      }
    })


  }

  subscribeSubjectCategoriesRef(cb:(ref:firebase.database.Reference)=>any){
    return this.subjectCategoriesRef.subscribe(cb);
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
