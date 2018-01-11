import { FilterFactoryProvider } from '../filter-factory/filter-factory';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Toast } from '@ionic-native/toast';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
/*
  Generated class for the UtilitiesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UtilitiesProvider {
  constructor(
    public http: Http,
    private toast: Toast,
    // public Filters:FilterFactoryProvider
  ) {
  }
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
  }

  moveDaysBack(today: Date, days: number) {
    const oneDay = 24 * 60 * 60 * 1000;
    return new Date(today.getTime() - oneDay * days)
  }


  shoppingCartDateComparer(cartX: ShoppingCartModel, cartY: ShoppingCartModel) {
    if (cartX.dataAcquisto > cartY.dataAcquisto) {
      return 1;
    }
    else if (cartX.dataAcquisto < cartY.dataAcquisto) {
      return -1;
    }
    return 0;
  }

  showToast(message: string, duration: string, position: string, next?: () => void) {

    console.log('toasted', message)
    this.toast.show(message, duration, position).subscribe(next);
    if (next)
      next();

  }

}
