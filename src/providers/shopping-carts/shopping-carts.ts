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
  public shoppingcartsList: BehaviorSubject<ShoppingCartModel> = new BehaviorSubject<ShoppingCartModel>(null);
  subjectShoppingCart: BehaviorSubject<firebase.database.Reference> = new BehaviorSubject(null); /* instanzio il behaviorSubject, è definito subito, 
                                                                                                   onAuthStateChanged può essere lento*/
  shoppingCartSubject: BehaviorSubject<Observable<ShoppingCartModel>> = new BehaviorSubject<Observable<ShoppingCartModel>>(null);

  start() {// inizializza il behaviorSubject
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
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
            this.shoppingcartsList.next(shoppingCart);
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

  create(){
    return this.subjectShoppingCart
  }

  delete(){
    return this.subjectShoppingCart
  }

  getMin(comparer: (cartx:
    ShoppingCartModel, carty: ShoppingCartModel) => number, cb: (cart: ShoppingCartModel) => void) {
    this.shoppingCartSubject.subscribe(carts => {
      if (carts)
        carts.min(comparer).subscribe(cb);
    }).unsubscribe();
  }

update(){
  return this.subjectShoppingCart
}

  flattenCarts(filter: (cart: ShoppingCartModel) => boolean, shoppingCarts: Observable<ShoppingCartModel>) {
    if (filter) // ci sono casi in cui il filtro non è definito
      //shoppingCarts.filter(filter).subscribe(result=>console.log('result filtro',result))
      return shoppingCarts.filter(filter).flatMap(cart => {
        if (cart.items)
          return Observable.from(cart.items);
      })
    else
      return Observable.from([]);
  }

  constructor(public http: Http) {
    this.ShoppingCartObservable = new Observable();
    this.start();
  }

}
