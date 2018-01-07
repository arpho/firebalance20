import { CategoriesProvider } from '../../providers/categories/categories';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Component, Input, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the CategorySumComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-sum',
  templateUrl: 'category-sum.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySumComponent implements OnInit,OnChanges {

  @Input() categoryId: string
  @Input() shoppingCartDateFilter: (cart:ShoppingCartModel)=> boolean;
  text: string;
  sum: any;
  ngOnChanges(changes:SimpleChanges){
    this.Categories.sumCategory(this.shoppingCartDateFilter,this.categoryId, x => {
      //console.log('result sum', x)
      this.sum['totale'] = this.roundToTwo(x.prezzo);
      //console.log('sum', this.sum)
      this.sum['moneta'] = x.moneta;

    })

  }
  ngOnInit() {

    this.text = 'Hello World' + this.categoryId;
    //  console.log('hi',this.categoryId);
    this.Categories.sumCategory(this.shoppingCartDateFilter,this.categoryId, x => {
      //console.log('result sum', x)
      this.sum['totale'] = this.roundToTwo(x.prezzo);
      //console.log('sum', this.sum)
      this.sum['moneta'] = x.moneta;

    })
  }
  roundToTwo(num) {
    return Math.round(num * 100) / 100
  }
  constructor(
    public ShoppingCart: ShoppingCartsProvider,
    public Categories: CategoriesProvider
  ) {
    this.sum = { totale: 0, 'moneta': '' };


  }

}
