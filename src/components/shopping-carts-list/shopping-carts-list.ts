import { Component,Input,OnInit,OnChanges,Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ItemSliding } from 'ionic-angular/es2015/components/item/item-sliding';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Subscription } from 'rxjs/Subscription';
import { UtilitiesProvider } from '../../providers/utilities/utilities';

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
  subscription:Subscription

  constructor(public ShoppingCart:ShoppingCartsProvider,
    public alertCtrl:AlertController,
  public utilities:UtilitiesProvider) {
    this.text = 'Hello World';
  }


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

  cancella(cart:ShoppingCartModel){

    this.subscription = this.ShoppingCart.delete().subscribe(ref=>{
      if(ref)
      ref.child(`/${cart.key}/`).remove()
      .then(success=>this.utilities.showToast('carrello cancellato','2000','top'))
      .catch(err=>this.utilities.showToast('problemi'+err,'10000','top'))
    })
  }
  delete(cart:ShoppingCartModel,sli:ItemSliding){
    console.log('deleting',cart)
    console.log('sli',sli)
    sli.close()

    let alert = this.alertCtrl.create({
      title: 'Conferma cancellazione',
      message: 'Vuoi cancellare questo carrello?',
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Cancella',
          handler: () => {
            this.cancella(cart)
          }
        }
      ]
    });
    alert.present();


    
  }
}
