import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { Observable } from 'videogular2/node_modules/rxjs/Observable';
import * as _ from 'lodash';

/*
  Generated class for the FilterFactoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FilterFactoryProvider {

  constructor(public http: Http) {
    console.log('Hello FilterFactoryProvider Provider');
  }

  shoppingCartDateFilter(days: number, data: string) {
    /*
     factory di filtri sui campi data di ShoppingCartModel 
    @param days:number  numero di giorni di anzianità dell'acquisto
    @param data:string possibili valori dataAcquisto e datAddebito
    */

    return (cart: ShoppingCartModel) => {

      const Data = new Date(cart[data]);
      const today = new Date();
      const since = new Date(today.getTime() - 24 * 60 * 60 * 1000) //pongo il riferimento a days giorni prima di oggi
      return since <= Data// l'acquisto è avvenuto dopo 

    }

  }
  takeEmAll(){
    return (item:any)=>{
      return true;
    }
  }

}
