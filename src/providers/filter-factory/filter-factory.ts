import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { Observable } from 'videogular2/node_modules/rxjs/Observable';
import { AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import { ShoppingCartsProvider } from '../shopping-carts/shopping-carts';
import { UtilitiesProvider } from '../utilities/utilities';

/*
  Generated class for the FilterFactoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FilterFactoryProvider {

  getFilterActionSheetsButtons(setFilterText: (txt: string) => {}, setShoppingCartDateFilter: (fn:(cart:ShoppingCartModel)=>boolean)=>{},intervallo?) {
intervallo = intervallo||{};
    return [
      {
        text: 'da ieri',
        handler: () => {
          const days = 1;
          setFilterText(' dal ' + this.utils.formatDate(this.utils.moveDaysBack(new Date(), days)));
          setShoppingCartDateFilter(this.shoppingCartDateFilter(days, 'dataAccredito'));
        }
      },
      {
        text: 'oggi',
        handler: () => {
          const days = 0;
          setFilterText(' dal ' + this.utils.formatDate(this.utils.moveDaysBack(new Date(), days)));
          setShoppingCartDateFilter(this.shoppingCartDateFilter(days, 'dataAccredito'));
        }
      },
      {
        text: 'una settimana',
        handler: () => {
          const days = 7;
          setFilterText(' dal ' + this.utils.formatDate(this.utils.moveDaysBack(new Date(), days)));
          setShoppingCartDateFilter(this.shoppingCartDateFilter(days, 'dataAcquisto'));
        }
      },
      {
        text: 'un mese',
        handler: () => {
          const days = 30;
          setFilterText(' dal ' + this.utils.formatDate(this.utils.moveDaysBack(new Date(), days)));
          setShoppingCartDateFilter(this.shoppingCartDateFilter(days, 'dataAcquisto'));
        }
      },
      {
        text: 'tre mesi',
        handler: () => {
          const days = 90;
          setFilterText(' dal ' + this.utils.formatDate(this.utils.moveDaysBack(new Date(), days)));
          setShoppingCartDateFilter(this.shoppingCartDateFilter(days, 'dataAcquisto'));
        }
      },
      {
        text: 'un anno',
        handler: () => {
          const days = 365;
          setFilterText(' dal ' + this.utils.formatDate(this.utils.moveDaysBack(new Date(), days)));
          setShoppingCartDateFilter(this.shoppingCartDateFilter(days, 'dataAcquisto'));

        }
      },
      intervallo,
      {
        text: 'dal primo acquisto registrato',
        role: 'cancel',
        handler: () => {
          this.Carts.getMin(this.utils.shoppingCartDateComparer, value => {
            setFilterText(' dal ' + this.utils.formatDate(value.dataAcquisto));
          })
          setShoppingCartDateFilter(this.takeEmAll());

        }
      }
    ]


  }
  alertAction(setFilterText,setShoppingCartDateFilter){
    let alert = this.alertCtrl.create({enableBackdropDismiss: true});
    alert.setTitle('seleziona INTERVALLO');
    alert.addInput({
      type: 'date',
      label: 'data inizio',
      value: new Date().toDateString()
    });
    alert.addInput({
      type: 'date',
      label: 'data fine',
      value: new Date().toDateString()
    });
    const clearAlert = ()=>{
      alert.dismiss()
    }
    alert.addButton({text:'Set',
    handler:(data:any)=>{
      console.log('handler',data)
      console.log(alert)
      setFilterText('dal '+this.utils.formatDate(data[0])+' al '+this.utils.formatDate(data[1]));
      setShoppingCartDateFilter(this.shoppingCartIntervalFilter(data[0],data[1],'dataAcquisto'))
    }});
    alert.addButton({text:'Cancel',
    handler:()=>{console.log('cancel')
                        const o = alert.dismiss();
                        clearAlert();
    
                        console.log('dismissed?',o)
                        o.then((a)=>{
                          console.log('donno',a)
                          
                        }).catch(e=>{
                          console.log('catched',e)
                        })
                        console.log('dismissed',o)
    
    }})
    return ()=>{alert.present()}
  }

  constructor(public http: Http,
    public utils: UtilitiesProvider,
    public alertCtrl:AlertController,
    public Carts: ShoppingCartsProvider) {
  }

  shoppingCartIntervalFilter(dataInizio,dataFine,data){
    const DataInizio = new Date(dataInizio);
    const DataFine = new Date(dataFine)
    return (cart:ShoppingCartModel)=>{
      const DataAcquisto = new Date(cart[data])
      return (DataInizio<=DataAcquisto) &&(DataFine>=DataAcquisto)
    }
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
      const since = this.utils.moveDaysBack(today, days) //pongo il riferimento a days giorni prima di oggi
      const result = since <= Data
      return result;// l'acquisto è avvenuto dopo 

    }

  }
  
  takeAllCarts(){
    return(cart:ShoppingCartModel)=>{return true}
  }
  
  takeEmAll() {
    return (item: ShoppingCartModel) => {
      return true;
    }
  }

}
