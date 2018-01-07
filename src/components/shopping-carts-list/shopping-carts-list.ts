import { Component,Input,OnInit,OnChanges,Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';
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
  templateUrl: 'shopping-carts-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartsListComponent  implements OnInit,OnChanges{
  @Input() shoppingCarts:ShoppingCartModel[]
  @Output() selectedCart = new EventEmitter()
  selected:boolean
  
  text: string;
  @Input() SelectedCart:ShoppingCartModel;

  isSelected(cart,selectedCart){
    if(cart&&selectedCart)
      return cart.key==selectedCart.key
    else
      return false
  }
  ngOnInit(){
  }
  clicked(cart){
    this.SelectedCart = cart;
    this.selectedCart.emit(cart)
  }
  ngOnChanges(changes:SimpleChanges){

  }

  constructor() {
    this.text = 'Hello World';
  }

}
