import { Component,Input,OnInit,OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the ShoppingCartsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-carts-list',
  templateUrl: 'shopping-carts-list.html'
})
export class ShoppingCartsListComponent  implements OnInit,OnChanges{
  @Input() shoppingCarts:ShoppingCartModel[]
  text: string;
  ngOnInit(){

  }
  clicked(cart){
    console.log('clicked',cart)
  }
  ngOnChanges(changes:SimpleChanges){
  }

  constructor() {
    console.log('Hello ShoppingCartsListComponent Component');
    this.text = 'Hello World';
  }

}
