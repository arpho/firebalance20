import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { CategorySelectorPage } from '../../pages/category-selector/category-selector';

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
  @Output() SeletedCategories: EventEmitter<string[]> = new EventEmitter<string[]>()
  text: string;

  constructor(public modal: ModalController) {
    console.log('Hello CategoriesSelectorComponent Component');
    this.text = 'Hello World';
  }

  selectedCategories(categories) {
    console.log('selectedCategories', this.selectedCategories)
  }

  clicked() {
    console.log('selected categories', {categories:this.categories})
    let modal = this.modal.create(CategorySelectorPage,{categories:this.categories});
    modal.onDidDismiss(data => {
      console.log('selected categories', data)
      if (data){
        this.categories = data
        this.SeletedCategories.emit(data)
      }
    })
    modal.present()
  }

  getClass() {
    const isvalid = this.categories && this.categories.length != 0;
    return { selected: isvalid }
  }

}
