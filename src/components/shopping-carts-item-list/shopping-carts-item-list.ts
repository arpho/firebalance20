import { Component,Input } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the ShoppingCartsItemListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-carts-item-list',
  templateUrl: 'shopping-carts-item-list.html'
})
export class ShoppingCartsItemListComponent {
  @Input() Cart:ShoppingCartModel
  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
