import { Component,Input,OnInit } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Observable } from 'rxjs/Observable';
import { ProviderModel } from '../../models/providers/provider.model';

/**
 * Generated class for the ProvidersTotalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'providers-total',
  templateUrl: 'providers-total.html'
})
export class ProvidersTotalComponent implements OnInit {
  @Input() ProviderKey: string;
  @Input() shoppingCartDateFilter: (cart:ShoppingCartModel)=> boolean;
  text: string;
  totale:Observable<ProviderModel>

  ngOnInit(){
    
  }

  constructor(
    Providers: ProvidersProvider
  ) {
    this.text = 'Hello World';
  }

}
