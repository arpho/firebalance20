import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { Component, Input } from '@angular/core';
import { ProviderModel } from '../../models/providers/provider.model';

/**
 * Generated class for the ProvidersListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'providers-list',
  templateUrl: 'providers-list.html'
})
export class ProvidersListComponent  {
 @Input() ProvidersList:Array<ProviderModel>
 @Input() shoppingCartDateFilter:(cart:ShoppingCartModel)=>boolean
  text: string;

  constructor() {
  }

}
