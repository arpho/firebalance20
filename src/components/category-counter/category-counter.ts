import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Component, Input,OnInit } from '@angular/core';

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
export class CategoryCounterComponent implements OnInit {
  @Input() dataFilter: string;
  @Input() categoryId:string;
  text: string;
  counter: number
 ngOnInit(){
   console.log('counter',this.categoryId);
    
   this.ShoppingCart.countCategory(this.categoryId,c=>{
    console.log('result',c)
  })
 }
  constructor(
    public ShoppingCart: ShoppingCartsProvider
  ) {
    this.counter = 0;
  }

}
