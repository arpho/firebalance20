import { Component } from '@angular/core';

/**
 * Generated class for the DiscountComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'discount',
  templateUrl: 'discount.html'
})
export class DiscountComponent {

  text: string;

  constructor() {
    console.log('Hello DiscountComponent Component');
    this.text = 'Hello World';
  }

}
