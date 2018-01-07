import { Component,ChangeDetectionStrategy } from '@angular/core';

/**
 * Generated class for the PurchaisedListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'purchaised-list',
  templateUrl: 'purchaised-list.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PurchaisedListComponent {

  text: string;

  constructor() {
    console.log('Hello PurchaisedListComponent Component');
    this.text = 'Hello World';
  }

}
