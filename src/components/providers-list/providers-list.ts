import { Component, Input } from '@angular/core';
import { AlertController,ModalController } from 'ionic-angular';
import { ProviderModel } from '../../models/providers/provider.model';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ItemSliding } from 'ionic-angular/components/item/item-sliding';
import { UpdateProviderPage } from '../../pages/update-provider/update-provider';
//import { UpdateProviderPage } from '../pages/update-provider';
/**
 * Generated class for the ProvidersListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'providers-list',
  templateUrl: 'providers-list.html'
})
export class ProvidersListComponent  {
 @Input() ProvidersList:Array<ProviderModel>
 @Input() shoppingCartDateFilter:(cart:ShoppingCartModel)=>boolean
  text: string;
  update(provider:ProviderModel,slidingItem: ItemSliding,
  ){
    console.log('updating',provider)
    slidingItem.close();
    let modal = this.modal.create(UpdateProviderPage,provider);
    modal.present()
  }

  delete(provider:ProviderModel,slidingItem: ItemSliding){

    let alert = this.alertCtrl.create({
      title: 'Conferma Cancellazione',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
            console.log('Annula clicked');
            slidingItem.close();
          }
        },
        {
          text: 'Cancella',
          handler: () => {
            console.log('cancella clicked');
            slidingItem.close();
          }
        }
      ]
    });
    alert.present();
  }

  constructor(
    public modal:ModalController,
    private alertCtrl: AlertController
  ) {
  }

}
