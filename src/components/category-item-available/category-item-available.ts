import { Component } from '@angular/core';

/**
 * Generated class for the CategoryItemAvailableComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-item-available',
  templateUrl: 'category-item-available.html'
})
export class CategoryItemAvailableComponent {

  text: string;

  constructor() {
    console.log('Hello CategoryItemAvailableComponent Component');
    this.text = 'Hello World';
  }

}
