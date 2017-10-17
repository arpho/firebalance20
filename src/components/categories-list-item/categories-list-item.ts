import { Component, Input } from '@angular/core';

/**
 * Generated class for the CategoriesListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categories-list-item',
  templateUrl: 'categories-list-item.html'
})
export class CategoriesListItemComponent {
 @Input() categoria:any;
  text: string;

  constructor() {
    console.log('categoria',this.categoria)
    this.text = 'Hello World';
  }

}
