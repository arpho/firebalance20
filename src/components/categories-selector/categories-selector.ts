import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CategoriesSelectorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categories-selector',
  templateUrl: 'categories-selector.html'
})
export class CategoriesSelectorComponent {
  @Input() categories: string[]
  @Output() SeletedCategories: EventEmitter<string[]>
  text: string;

  constructor() {
    console.log('Hello CategoriesSelectorComponent Component');
    this.text = 'Hello World';
  }

  selectedCategories(categories) {
    console.log('selectedCategories', this.selectedCategories)
  }

clicked(){
  console.log('clicked');
}

  getClass() {
    const isvalid = this.selectedCategories.length != 0;
    return { selected: isvalid }
  }

}
