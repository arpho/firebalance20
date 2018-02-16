import { Component, ChangeDetectionStrategy, Input, OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Category } from '../../pages/categories/categories.model';
import { Subscription } from 'rxjs';

/**
 * Generated class for the AvailableCategoriesListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'available-categories-list',
  templateUrl: 'available-categories-list.html',
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class AvailableCategoriesListComponent implements OnDestroy, OnChanges {
  @Input() selectedCategories: string[];
  @Input() Categorie: string[];
  @Input() filterString: string;

  @Output() Selected: EventEmitter<string> = new EventEmitter<string>()
  text: string;
  subscription: Subscription
  filter: (item: string) => boolean

  constructor(public Categories: CategoriesProvider) {
    console.log('Hello AvailableCategoriesListComponent Component');
    this.text = 'Hello World available categories';


  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)
    if (changes.selectedCategories)
      this.filter = (id: string) => {
        return this.selectedCategories.indexOf(id) == -1 // se non è presente nella lista dei selezionati lo prendo
      }
  }

  selected(id) {
    console.log('selected', id)
    this.Selected.emit(id)

  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
