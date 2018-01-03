import { Component } from '@angular/core';

/**
 * Generated class for the PurchaisedItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'purchaised-item',
  templateUrl: 'purchaised-item.html'
})
export class PurchaisedItemComponent {

  text: string;

  constructor() {
    console.log('Hello PurchaisedItemComponent Component');
    this.text = 'Hello World';
  }

}
