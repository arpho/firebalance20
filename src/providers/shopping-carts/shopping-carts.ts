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
  shoppingCartSubject:BehaviorSubject<Observable<ShoppingCartModel>> = new BehaviorSubject(null);

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
            console.log('element',element)
            const shoppingCart = new ShoppingCartModel();
            _.extend(shoppingCart, element.val())
            console.log('cart',shoppingCart,element);
            shoppingCart.key = element.key;
            this.shoppingCarts.push(shoppingCart)
            return false;
          });
          this.ShoppingCartObservable = Observable.from(this.shoppingCarts)
          this.shoppingCartSubject.next(this.ShoppingCartObservable); 
          console.log('got shoppingcart')

        })
      }
    })
  }
  countCategory(categoryId:string,cb){
    console.log('counting ',categoryId)
    this.shoppingCartSubject.subscribe(shoppingCarts=>{
      console.log('abracadabra',shoppingCarts);
      if (shoppingCarts)
     var count =  shoppingCarts.flatMap(cart=>{
       console.log('cart',cart,cart.items.length)
       if (cart.items)
        return Observable.from(cart.items);
      }).count((value,i,s)=>{ 
         return value.categorieId.indexOf(categoryId)>-1
      }).subscribe(cb)
    })

    
  }

  constructor(public http: Http) {
    console.log('Hello ShoppingCartsProvider Provider');
    this.ShoppingCartObservable = new Observable();
    this.start();
  }

}
