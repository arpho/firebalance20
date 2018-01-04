import { ProviderModel } from '../../models/providers/provider.model';
import { ShoppingCartsProvider } from '../shopping-carts/shopping-carts';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { SharedStylesHost } from '@angular/platform-browser/src/dom/shared_styles_host';
import {Observable} from 'rxjs/Observable'

/*
  Generated class for the ProvidersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProvidersProvider {
  public providersRef: firebase.database.Reference
  subjectProvidersRef = new BehaviorSubject(null) // instanzio il behaviorSubject, è definito subito
  providersList = Array<ProviderModel>();
  constructor(public http: Http,
    public Carts: ShoppingCartsProvider) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        this.providersRef = firebase.database().ref((`/fornitori/${uid}`))
        this.subjectProvidersRef.next(this.providersRef);
        

      }
    })
  }

  getProviderById(providerId:String,cb){
    this.subjectProvidersRef.subscribe(ref=>{ 
      if(ref){
        ref.child(`/${providerId}/`).on('value',res=>cb(new BehaviorSubject(res.val())))
      }
    })
  }

  update(provider, cb) {
    this.subjectProvidersRef.subscribe(Providers => {
      if (Providers)
        Providers.child(`/${provider.key}/`).update(provider).then(cb);
    }).unsubscribe()
  }

  delete(provider, cb) {
    this.subjectProvidersRef.subscribe(Providers => {
      if (Providers)
        //Providers.child(`/$provider.key}/`).remove().then(cb);
        Providers.child(`/${provider.key}/`).remove().then(cb)
    }).unsubscribe()
  }

  create(provider: ProviderModel, cb) {
    this.subjectProvidersRef.subscribe(Providers => {
      Providers.push(provider).then(cb);
    })
  }

  getProvidersArray(next) {
    this.subjectProvidersRef.subscribe(ref => {
      if (ref)
        ref.on('value', snapshot => {
          this.providersList = [];
          snapshot.forEach(element => {
            let provider = new ProviderModel(element.val())
            //_.extend(payment, element.val())
            provider.key = element.key;
            this.providersList.push(provider);
          });
          next(this.providersList)
        })
    })
  }
}
