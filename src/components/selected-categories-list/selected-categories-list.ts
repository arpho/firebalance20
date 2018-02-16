import { Component,ChangeDetectionStrategy,Input,Output, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';

/**
 * Generated class for the SelectedCategoriesListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selected-categories-list',
  templateUrl: 'selected-categories-list.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SelectedCategoriesListComponent implements OnChanges{
  @Input() selectedCategories:string[]
  @Output() Removed:EventEmitter<string>= new EventEmitter<string>()
  text: string;

  constructor() {
    console.log('Hello SelectedCategoriesListComponent Component');
    this.text = 'Hello World';
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
  }

  removed(id){
    console.log('removed',id)
    this.Removed.emit(id)
  }

}
