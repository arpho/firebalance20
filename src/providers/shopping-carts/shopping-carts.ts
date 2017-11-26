import { Observable } from 'rxjs/Rx';
import { ProfileService } from '../../pages/profile/profile.service';
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingCartModel, ItemModel } from '../../models/shoppingCart.model';
import * as _ from 'lodash';

/*
  Generated class for the ShoppingCartsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShoppingCartsProvider {
  public shoppingCartRef: firebase.database.Reference;
  public Profile: ProfileService;
  public ShoppingCartObservable: Observable<ShoppingCartModel>
  public shoppingCarts: ShoppingCartModel[];
  subjectShoppingCart: BehaviorSubject<firebase.database.Reference> = new BehaviorSubject(null); // instanzio il behaviorSubject, è definito subito
  shoppingCartSubject: BehaviorSubject<Observable<ShoppingCartModel>> = new BehaviorSubject(null);

  start() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('got user', user)
        const uid = user.uid || this.Profile.getUser().uid;
        this.shoppingCartRef = firebase.database().ref(`/acquisti/${uid}`);
        this.subjectShoppingCart.next(this.shoppingCartRef); // inserisco il riferimento
      }
    })
    this.subjectShoppingCart.subscribe(ref => {
      if (ref) {
        ref.on('value', snapshot => {
          this.shoppingCarts = []
          snapshot.forEach(element => {
            const shoppingCart = new ShoppingCartModel(element.val());
            //_.extend(shoppingCart, element.val())
            shoppingCart.key = element.key;
            this.shoppingCarts.push(shoppingCart)
            return false;
          });
          this.ShoppingCartObservable = Observable.from(this.shoppingCarts)
          this.shoppingCartSubject.next(this.ShoppingCartObservable);

        })
      }
    })
  }


  getMin(comparer: (cartx:
    ShoppingCartModel, carty: ShoppingCartModel) => number, cb: (cart: ShoppingCartModel) => void) {
    this.shoppingCartSubject.subscribe(carts => {
      if (carts)
        carts.min(comparer).subscribe(cb);
    })
  }

  flattenCarts(shoppingCarts: Observable<ShoppingCartModel>) {
    return shoppingCarts.flatMap(cart => {
      if (cart.items)
        return Observable.from(cart.items);
    })
  }


  countCategory(categoryId: string, cb) {
    this.shoppingCartSubject.subscribe(shoppingCarts => {
      if (shoppingCarts) {
        console.log('applico filtri')
        this.flattenCarts(shoppingCarts).count(x => {
          return x.categorieId && x.categorieId.indexOf(categoryId) > -1;
        }).subscribe(cb)
      }
    })
  }

  sumCategory(categoryId: string, cb) {
    this.shoppingCartSubject.subscribe(shoppingCarts => {
      if (shoppingCarts) {
        this.flattenCarts(shoppingCarts).scan((acc, x) => {
          if (x.categorieId && x.categorieId.indexOf(categoryId) > -1)
            acc.prezzo = Number(acc.prezzo) + Number(x.prezzo)
          return acc;
        }, new ItemModel()).subscribe(cb)
      }
    })
  }
  constructor(public http: Http) {
    console.log('Hello ShoppingCartsProvider Provider');
    this.ShoppingCartObservable = new Observable();
    this.start();
  }

}
