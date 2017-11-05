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
  subjectShoppingCart: BehaviorSubject<firebase.database.Reference> = new BehaviorSubject(null) // instanzio il behaviorSubject, è definito subito

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
            const shoppingCart = new ShoppingCartModel();
            _.extend(shoppingCart, element)
            shoppingCart.key = element.key;
            this.shoppingCarts.push(shoppingCart)
            return false;
          });
          this.ShoppingCartObservable = Observable.from(this.shoppingCarts)
          console.log('got shoppingcart')

        })
      }
    })
  }

  constructor(public http: Http) {
    console.log('Hello ShoppingCartsProvider Provider');
    this.ShoppingCartObservable = new Observable();
    this.start();
  }

}
