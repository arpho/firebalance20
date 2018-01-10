import { Component } from '@angular/core';

/**
 * Generated class for the ListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {

  text: string;

  constructor() {
    console.log('Hello ListItemComponent Component');
    this.text = 'Hello World';
  }

}
