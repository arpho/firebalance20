import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { Component,Input,OnChanges,SimpleChanges,OnInit,ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular/components/item/item-sliding';
import {UpdatePaymentPage} from '../../pages/update-payment/update-payment';
import { PaymentsModel } from '../../models/payment.model';
import { PaymentsProvider } from '../../providers/payments/payments';
import { UtilitiesProvider } from '../../providers/utilities/utilities';

/**
 * Generated class for the PaymentListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment-list',
  templateUrl: 'payment-list.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PaymentListComponent implements OnInit, OnChanges{
 @Input() paymentsList:any
 @Input() shoppingCartDateFilter:(cart:ShoppingCartModel)=>boolean
  text: string;

  ngOnInit(){
  }
  delete(item:PaymentsModel,slidingItem: ItemSliding){
    console.log('delete',item)

    let alert = this.alertCtrl.create({
      title: 'Conferma Cancellazione pagamento',
      message: `Vuoi cancellare ${item.nome}?`,
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
            slidingItem.close();
          }
        },
        {
          text: 'Cancella',
          handler: () => {
            this.Payments.delete(item, res => {
              this.utilities.showToast(`Forma di pagamento ${item.nome} cancellata`,'1000','top')
            },fail=>{
              this.utilities.showToast(`qualcosa non è andata bene`,'1000','top')

            })
            slidingItem.close();

          }
        }
      ]
    });
    alert.present();
  }

  update(payment){
    let modal = this.modal.create(UpdatePaymentPage,payment);
    modal.present();
    
  }
  logDrag(event){
    //console.log('drag',event  );
  }

  ngOnChanges(changes:SimpleChanges){
  }
  constructor(
    private alertCtrl: AlertController,
      public Payments:PaymentsProvider,
    public modal: ModalController,
    private utilities:UtilitiesProvider
  ) {
    this.paymentsList= [];
  }

}
