import { Component,Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item';

/**
 * Generated class for the CategoryItemSelectedComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-item-selected',
  templateUrl: 'category-item-selected.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryItemSelectedComponent extends CategoryItemComponent {

  text: string;
  @Output() remove:EventEmitter<string>= new EventEmitter<string>()
 click(){
   this.remove.emit(this.CategoryId);
 }

}
