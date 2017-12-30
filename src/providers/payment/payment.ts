import { ShoppingCartsProvider } from '../shopping-carts/shopping-carts';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Number } from 'core-js/library/web/timers';

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PaymentsProvider {

  constructor(public http: Http,
  public Carts:ShoppingCartsProvider) {
    console.log('Hello PaymentProvider Provider');
  }

}
