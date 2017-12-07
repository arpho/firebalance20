import { ProviderModel } from '../../models/providers/provider.model';
import { ShoppingCartsProvider } from '../shopping-carts/shopping-carts';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    Carts: ShoppingCartsProvider) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        this.providersRef = firebase.database().ref((`/fornitori/${uid}`))
        this.subjectProvidersRef.next(this.providersRef);

      }
    })
  }

  update(provider, cb) {
    this.subjectProvidersRef.subscribe(Providers => {
      if (Providers)
        Providers.child(`/${provider.key}/`).update(provider).then(cb);
    }).unsubscribe()
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
