import { Component,Output, EventEmitter,ChangeDetectionStrategy,OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item';

/**
 * Generated class for the CategoryItemAvailableComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-item-available',
  templateUrl: 'category-item-available.html',
//  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryItemAvailableComponent extends CategoryItemComponent implements OnChanges{
  @Output() selected:EventEmitter<string> = new EventEmitter<string>()
  //@Input CategoryId:sdtring from father
  text: string;

  click(){
    this.selected.emit(this.CategoryId)
    
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('changes',changes)
  }

}
