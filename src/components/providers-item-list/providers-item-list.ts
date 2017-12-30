import { Component, Input } from '@angular/core';
import { ProviderModel } from '../../models/providers/provider.model';
import { ShoppingCartModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the ProvidersItemListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'providers-item-list',
  templateUrl: 'providers-item-list.html'
})
export class ProvidersItemListComponent {
  @Input() Provider: ProviderModel;
  @Input() shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean;

  text: string;

 
  constructor() {
    console.log('Hello ProvidersItemListComponent Component');
    this.text = 'Hello World';
  }

}
