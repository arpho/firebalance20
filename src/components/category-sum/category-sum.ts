import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the CategorySumComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-sum',
  templateUrl: 'category-sum.html'
})
export class CategorySumComponent implements OnInit {

  @Input() categoryId: string
  @Input() dataFilter: string;
  text: string;
  sum: any;
  ngOnInit() {
    this.sum = {};
    this.text = 'Hello World' + this.categoryId;
    //  console.log('hi',this.categoryId);
    this.ShoppingCart.sumCategory(this.categoryId, x => {
      console.log('result sum', x)
      this.sum['totale'] = this.roundToTwo(x.prezzo);
      console.log('sum', this.sum)
      this.sum['moneta'] = x.moneta;

    })
  }
  roundToTwo(num) {
    return Math.round(num * 100) / 100
  }
  constructor(
    public ShoppingCart: ShoppingCartsProvider
  ) {


  }

}
