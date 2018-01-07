import { Component, Input,OnChanges,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the ShoppingCartDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-cart-detail',
  templateUrl: 'shopping-cart-detail.html'
})
export class ShoppingCartDetailComponent implements OnChanges{
  @Input() selectedCart: ShoppingCartModel
  text: string;
  Cart: ShoppingCartModel;
  public cartForm: FormGroup;
  ngOnChanges(changes:SimpleChanges){
    if(this.selectedCart)
      this.cartForm = this.getForm(this.selectedCart)
  }

  getForm(cart: ShoppingCartModel) {
    return this.fb.group({
      dataAcquisto: new FormControl(cart.dataAcquisto),
      fornitoreId: new FormControl(cart.fornitoreId),
      moneta: new FormControl(cart.moneta),
      pagamentoId: new FormControl(cart.pagamentoId),
      online:new FormControl(cart.online),
      note: new FormControl(cart.note)
    }, Validators.required);
  }

  constructor(
    public fb: FormBuilder,
  ) {
    console.log('Hello ShoppingCartDetailComponent Component');
    this.text = 'Hello World detail ';
   
      this.cartForm =  this.getForm(new ShoppingCartModel())

  }

}
