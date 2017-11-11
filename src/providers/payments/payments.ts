import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Category } from '../../pages/categories/categories.model';
import { PaymentsModel } from '../../models/payment.model'

/*
  Generated class for the PaymentsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PaymentsProvider {
  public paymentsRef: firebase.database.Reference
  paymentsList: any;
  subjectPaymentsRef = new BehaviorSubject(null) // instanzio il behaviorSubject, è definito subito
  constructor(public http: Http) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        this.paymentsRef = firebase.database().ref((`/pagamenti/${uid}`))
        this.subjectPaymentsRef.next(this.paymentsRef);

      }
    })
  }

  getPaymentsArray(next) {
    this.subjectPaymentsRef.subscribe(ref => {
      if (ref)
        ref.on('value', snapshot => {
          this.paymentsList = [];
          snapshot.forEach(element => {
            let payment = new PaymentsModel()
            _.extend(payment, element.val())
            payment.key = element.key;
            this.paymentsList.push(payment)
          });
          next(this.paymentsList)
        })
    })
  }

}
