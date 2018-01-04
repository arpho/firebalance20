import { Component, Input, OnChanges } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class ShoppingCartsItemListComponent implements OnChanges {
  @Input() Cart: ShoppingCartModel
  @Input() SelectedCart: ShoppingCartModel;
  selected: boolean;
  text: string;
  ngOnChanges(changes: SimpleChanges) {
    if(this.Cart&&this.SelectedCart)
      this.selected = this.Cart.key == this.SelectedCart.key
  }

  constructor() {
    this.text = 'Hello World';
  }

}
