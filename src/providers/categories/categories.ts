//import {RX} from 'rxjs/Rx'
import { Observable } from 'rxjs/Rx';
import { ProfileService } from '../../pages/profile/profile.service';
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Category } from '../../pages/categories/categories.model';
import { ShoppingCartsProvider } from '../shopping-carts/shopping-carts';
import { ItemModel, ShoppingCartModel } from '../../models/shoppingCart.model'

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CategoriesProvider {

  public categoriesRef: firebase.database.Reference
  public user: any;
  Categorie: any;
  public Profile: ProfileService;
  subjectCategoriesRef = new BehaviorSubject(this.categoriesRef) // instanzio il behaviorSubject, è definito subito
  constructor(public http: Http,
    public ShoppingCart: ShoppingCartsProvider

  ) {

    console.log('check user')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('got user', user)
        const uid = user.uid || this.Profile.getUser().uid;
        this.categoriesRef = firebase.database().ref(`/categorie/${uid}`);
        this.subjectCategoriesRef.next(this.categoriesRef); // inserisco il riferimento
        console.log('cateegoriesRef', this.categoriesRef);
      }
    })


  }

  subscribeSubjectCategoriesRef(cb: (ref: firebase.database.Reference) => any) {
    return this.subjectCategoriesRef.subscribe(cb);
  }

  getCategories(): firebase.database.Reference {
    return this.categoriesRef
  }

  getArrawyCategories(cb: any) {
    this.Categorie = [];
    this.subjectCategoriesRef.subscribe(ref => {
      if (ref)
        ref.on('value', categoriesSnapshot => {
            console.log('snapshot',categoriesSnapshot)
          this.Categorie = []; // inizializzo la lista delle categorie

          categoriesSnapshot.forEach(snap => {
            const categoria = new Category({ title: snap.val().title, $key: snap.key })
            this.Categorie.push(new Category({ title: snap.val().title, $key: snap.key }));
            return false;
          })
        });
      cb(this.Categorie)
    })

  }

  countCategory(Filter: (cart: ShoppingCartModel) => boolean, categoryId: string, cb) {
    this.ShoppingCart.shoppingCartSubject.subscribe(shoppingCarts => {
      if (shoppingCarts) {
        this.ShoppingCart.flattenCarts(Filter, shoppingCarts).count(x => {
          return x.categorieId && x.categorieId.indexOf(categoryId) > -1;
        }).subscribe(cb)
      }
    })
  }

  sumCategory(Filter: (cart: ShoppingCartModel) => boolean, categoryId: string, cb) {
    this.ShoppingCart.shoppingCartSubject.subscribe(shoppingCarts => {
      if (shoppingCarts) {
        this.ShoppingCart.flattenCarts(Filter, shoppingCarts).isEmpty().subscribe(empty => {
          if (empty)// il filtro taglia via tutti i risultati
            cb(new ItemModel())// ritorno 0
        }).unsubscribe()
        this.ShoppingCart.flattenCarts(Filter, shoppingCarts).scan((acc, x) => {
          if (x.categorieId && x.categorieId.indexOf(categoryId) > -1)
            acc.prezzo = Number(acc.prezzo) + Number(x.prezzo)
          return acc;
        }, new ItemModel()).subscribe(cb)
      }
    })
  }

  getCategory(categoryId: string) {
    return this.categoriesRef.child(categoryId)
  }
  update(value, id) {
    return this.categoriesRef.child(`/${id}/`).update({ title: value })
  }

  pushNewCategory(category: string) {
    this.categoriesRef.push({ title: category })
  }
}
