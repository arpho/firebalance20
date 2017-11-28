import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the CategoriesListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categories-list',
  templateUrl: 'categories-list.html'
})
export class CategoriesListComponent implements OnChanges {
 @Input() Categorie:any
 @Input() shoppingCartDateFilter:(cart:ShoppingCartModel)=> boolean;
  text: string;

  ngOnChanges(changes:SimpleChanges){
    console.log('changes',changes)

  }
  constructor() {
    console.log('Hello CategoriesListComponent Component');
    this.text = 'Hello World categories list';
  }

}
