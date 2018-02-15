import { Component } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item';

/**
 * Generated class for the CategoryItemSelectedComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-item-selected',
  templateUrl: 'category-item-selected.html'
})
export class CategoryItemSelectedComponent extends CategoryItemComponent {

  text: string;

 click(){
   console.log('remove',this.CategoryId)
 }

}
