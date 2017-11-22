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
    public Filters:FilterFactoryProvider
  ) {
  }
  cloneArray(master:[(cart:ShoppingCartModel)=>boolean]){
   const out:[(cart:ShoppingCartModel)=>boolean] = [this.Filters.takeEmAll()];
   master.forEach(element => {out.push(element)
     
   });
   return out;
  }

  showToast(message: string, duration: string, position: string, next?: () => void) {
    
                console.log('toasted',message)
                this.toast.show(message, duration, position).subscribe(next);
                if (next)
                  next();
    
        }

}
