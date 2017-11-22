import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Category } from '../../pages/categories/categories.model';
import { PaymentsModel } from '../../models/payment.model'
import { ShoppingCartsProvider } from '../shopping-carts/shopping-carts';

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
  constructor(public http: Http,
    public Carts: ShoppingCartsProvider) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        this.paymentsRef = firebase.database().ref((`/pagamenti/${uid}`))
        this.subjectPaymentsRef.next(this.paymentsRef);

      }
    })
  }


  calculateAmmount(filterShoppingCart:[(cart:ShoppingCartModel)=>boolean],pagamentoId, cb) {
    /*
    calcola l'importo del pagamento effetuato con il metodo
    @param pagamentoId:string chiave del pagamento
    @param cb:shoppingCartModel=>{} funzione di callback
    @todo aggiungere paramentro di filtro
    */
    this.Carts.shoppingCartSubject.subscribe(shoppingCart => {
      if (shoppingCart)
        this.Carts.applyFilterChain(shoppingCart,filterShoppingCart).scan((acc, x) => {

          if (x.pagamentoId == pagamentoId)
            acc.totale = acc.totale || 0 + x.totale
          return acc
        }, new ShoppingCartModel()).subscribe(tot => {
          cb(tot);
        })// mantengo la sottoscrizione perchè è un'operazione di lettura
    })
  }
  updatePayment(pagamento:PaymentsModel,cb){
    this.subjectPaymentsRef.subscribe(Payments =>{
      if(Payments)
      Payments.child(`/${pagamento.key}/`).update(pagamento).then(cb);
    }).unsubscribe()
  }

  pushNewPayment(pagamento: PaymentsModel, cb) {
    /*
    inserisce un pnuovo pagamento nel db
    @param pagamento:PaymentsModel nuovo pagamento
    cb:result=>{} funzione di callback
    */
    this.subjectPaymentsRef.subscribe(Payments => {
      if (Payments)
        Payments.push(pagamento, (result => {
          cb(result)
        }))
    }).unsubscribe()//cancello la sottoscrizione è un'operazione che non deve essere ripetuta
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

