import { Component,Input,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { PaymentsProvider } from '../../providers/payments/payments';
import { PaymentsModel } from '../../models/payment.model';
import {UpdatePaymentPage} from '../../pages/update-payment/update-payment';
/**
 * Generated class for the PaymentItemListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment-item-list',
  templateUrl: 'payment-item-list.html'
})
export class PaymentItemListComponent implements OnInit {
 @Input() Payment:PaymentsModel
  text: string;
  totale: number;


  update(key){
    console.log('this is trhe key',key)
    let modal = this.modal.create(UpdatePaymentPage,this.Payment);
    modal.present();
    
  }

  ngOnInit(){
    console.log('payment',this.Payment)
     this.Payments.calculateAmmount(this.Payment.key, acc=>{
       this.totale = acc.totale
       //console.log('totale per '+this.Payment.nome,acc.totale);
     })
  }
  constructor(
    public Payments:PaymentsProvider,
    public modal: ModalController,
  ) {
  }

}
