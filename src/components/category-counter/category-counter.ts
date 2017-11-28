import { CategoriesProvider } from '../../providers/categories/categories';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the CategoryCounterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-counter',
  templateUrl: 'category-counter.html'
})
export class CategoryCounterComponent implements OnInit,OnChanges {
  @Input() dataFilter: string;
  @Input() categoryId: string;
  @Input() shoppingCartDateFilter:(cart:ShoppingCartModel)=> boolean;
  

  ngOnChanges(changes:SimpleChanges){
    this.Categories.countCategory(this.shoppingCartDateFilter,this.categoryId, c => {
      this.counter = c;
    })
  }
  text: string;
  counter: number
  ngOnInit() {

    this.Categories.countCategory(this.shoppingCartDateFilter,this.categoryId, c => {
      this.counter = c;
    })
  }
  constructor(
    public ShoppingCart: ShoppingCartsProvider,
    public Categories: CategoriesProvider
  ) {
    //this.counter = 0;
  }

}
