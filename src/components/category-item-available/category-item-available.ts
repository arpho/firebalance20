import { Component,Output, EventEmitter } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item';

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
export class CategoryItemAvailableComponent extends CategoryItemComponent {
  @Output()removed:EventEmitter<string> = new EventEmitter<string>()
  text: string;

  

}
