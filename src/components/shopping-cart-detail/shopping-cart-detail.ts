import { Component } from '@angular/core';

/**
 * Generated class for the ShoppingCartDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-cart-detail',
  templateUrl: 'shopping-cart-detail.html'
})
export class ShoppingCartDetailComponent {

  text: string;

  constructor() {
    console.log('Hello ShoppingCartDetailComponent Component');
    this.text = 'Hello World detail ';
  }

}
